"use client";

import { useEffect } from "react";

// On a weak connection some of the many images a page loads at once can fail,
// and browsers never retry them — Safari leaves a "?" in their place. Retry a
// failed image a few times, waiting a little longer each time.
const MAX_RETRIES = 3;
const BASE_DELAY_MS = 1500;

// Adds (or bumps) a `retry` query param. A new URL makes the browser fetch
// again rather than reuse the failed response (Safari does that for preloaded
// images); the image optimizer ignores the param and serves its cached copy.
function withRetryParam(url: string, attempt: number) {
  const clean = url.replace(/([?&])retry=\d+&?/, "$1").replace(/[?&]$/, "");
  return `${clean}${clean.includes("?") ? "&" : "?"}retry=${attempt}`;
}

function retry(img: HTMLImageElement) {
  const attempt = Number(img.dataset.retry ?? 0) + 1;
  const src = img.getAttribute("src");
  if (attempt > MAX_RETRIES || !src) return;
  img.dataset.retry = String(attempt);

  setTimeout(() => {
    const srcset = img.getAttribute("srcset");
    if (srcset) {
      img.setAttribute(
        "srcset",
        srcset
          .split(", ")
          .map((c) => {
            const [url, descriptor] = c.trim().split(" ");
            return [withRetryParam(url, attempt), descriptor].filter(Boolean).join(" ");
          })
          .join(", "),
      );
    }
    img.setAttribute("src", withRetryParam(src, attempt));
  }, BASE_DELAY_MS * 2 ** (attempt - 1));
}

export default function ImageRetry() {
  useEffect(() => {
    const onError = (e: Event) => {
      if (e.target instanceof HTMLImageElement) retry(e.target);
    };
    // Image errors don't bubble, so listen in the capture phase.
    document.addEventListener("error", onError, true);

    // Images that already failed before this ran (during hydration).
    document.querySelectorAll("img").forEach((img) => {
      if (img.complete && img.naturalWidth === 0) retry(img);
    });

    return () => document.removeEventListener("error", onError, true);
  }, []);

  return null;
}
