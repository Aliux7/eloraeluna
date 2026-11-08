// Pre-generates every optimized image so visitors never wait for one to be
// created. Run on the server after each deploy + restart:
//   node scripts/warm-images.mjs            (defaults to http://127.0.0.1:3000)
//   node scripts/warm-images.mjs https://elora-eluna.com
const base = (process.argv[2] ?? "http://127.0.0.1:3000").replace(/\/$/, "");
const CONCURRENCY = 2; // keep the VPS responsive for real visitors meanwhile

const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

const images = new Set();
for (const path of pages) {
  const html = await (await fetch(base + path)).text();
  // Every width listed in each srcset, plus plain src attributes.
  for (const m of html.matchAll(/\/_next\/image\?url=[^"'\s,]+/g)) {
    images.add(m[0].replace(/&amp;/g, "&"));
  }
}
console.log(`${pages.length} pages, ${images.size} image sizes to warm`);

const queue = [...images];
let done = 0, generated = 0, failed = 0;
const started = Date.now();
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const url = queue.shift();
      try {
        const res = await fetch(base + url, { headers: { Accept: "image/webp,*/*" } });
        await res.arrayBuffer();
        if (!res.ok) { failed++; console.log(`  failed ${res.status}: ${decodeURIComponent(url).slice(0, 110)}`); }
        else if (res.headers.get("x-nextjs-cache") !== "HIT") generated++;
      } catch {
        failed++;
      }
      if (++done % 25 === 0) console.log(`  ${done}/${images.size}`);
    }
  }),
);
console.log(
  `done in ${Math.round((Date.now() - started) / 1000)}s: ${generated} created, ` +
    `${images.size - generated - failed} already cached, ${failed} failed`,
);
