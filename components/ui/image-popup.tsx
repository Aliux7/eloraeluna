"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const MotionImage = motion.create(Image);

type Props = {
  src: StaticImageData;
  alt?: string;
  /** Rendered width of the inline image, passed to next/image. */
  sizes: string;
};

export default function ImagePopup({ src, alt = "", sizes }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={alt ? `Open ${alt}` : "Open image"}
        className="block w-full h-full cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          sizes={sizes}
          draggable={false}
          className="w-full h-full object-cover object-center"
        />
      </button>

      {/* Portalled to <body> so ancestors with transforms (e.g. FadeSlide) don't trap the fixed overlay. */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={alt}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="fixed inset-0 z-60 flex items-center justify-center bg-[#464948]/95 backdrop-blur-md p-5 sm:p-10 xl:p-16 cursor-zoom-out"
              >
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="absolute top-5 right-5 sm:top-8 sm:right-8 size-10 sm:size-12 flex items-center justify-center border border-[#9D7958] text-[#F3F0E8] hover:bg-[#9D7958] transition-colors duration-200 cursor-pointer"
                >
                  <span className="relative block size-4">
                    <span className="absolute left-0 top-1/2 w-full h-px bg-current rotate-45" />
                    <span className="absolute left-0 top-1/2 w-full h-px bg-current -rotate-45" />
                  </span>
                </button>
                <MotionImage
                  src={src}
                  alt={alt}
                  sizes="100vw"
                  draggable={false}
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="w-auto h-auto max-w-full max-h-full object-contain cursor-default select-none"
                />
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
