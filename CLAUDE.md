# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. 

## Commands


```bash
npm run dev     # Next.js dev server (Turbopack) on http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint (flat config, next/core-web-vitals + next/typescript)
```

If the dev server errors with `Persisting failed: Unable to open static sorted file` or with `Can't resolve 'tailwindcss'` from a parent directory, the Turbopack cache is corrupted — run `rm -rf .next` and restart.

## Stack

- **Next.js 16.1.5** with the App Router; `next dev` uses Turbopack by default.
- **React 19**.
- **Tailwind CSS v4** via `@tailwindcss/postcss`. There is no `tailwind.config` file — configuration lives in `app/globals.css` under `@theme { ... }`. Note the custom `--breakpoint-2xl: 1920px` override (wider than Tailwind's default 1536px), which affects every `2xl:` utility across the codebase.
- **framer-motion** for animations, **clsx + tailwind-merge** exposed as `cn()` in `lib/utils.tsx`.
- **TypeScript strict**, path alias `@/*` → project root.

## Architecture

Marketing site for the "Elora Eluna" property, composed as a set of static App Router pages that each stitch together section components.

### Route → section composition pattern

Each route in `app/<page>/page.tsx` is a thin file that imports and stacks its own set of section components from `components/section/<page>/`. `app/page.tsx` (the home page) is the canonical example — it renders eight sections from `components/section/home/`. When adding a page, follow this pattern: create `app/<slug>/page.tsx` that composes files under `components/section/<slug>/`.

### Global chrome

`app/layout.tsx` wraps every route with `Header`, `Footer`, and `FloatingContact` from `components/layout/`. `Header` toggles the `FullMenu` overlay locally with `useState` — there is no global state management library.

### News detail routing

`app/news-detail/[slug]/page.tsx` looks up the article in `constants/news.ts` by `String(item.id) === slug`, then hard-branches on `article.id` to render one of `NewsOneSection`…`NewsFourSection`. Adding a new article requires both a `newsData` entry AND a new `news-<n>-section.tsx` component AND a new branch in the page. There is no data-driven rendering here.

### Component conventions

- `components/section/` — page-specific composition units, one folder per route.
- `components/animation/` — reusable framer-motion primitives (`WordsPullUp`, `LinkPullUp`, `FadeSlide`) used across sections.
- `components/ui/` — reusable primitives (`SwipeShiftButton`, `ImageZoom`).
- `components/layout/` — global chrome only.
- Sections that use hooks or interaction start with `"use client"`.

### Assets

Images are colocated under `app/assets/<page>/…` and imported as static `next/image` sources (not from `public/`). `constants/news.ts` imports its banner images this way too.

## Notes

- `tsconfig.json`'s `include` array has a stray explicit entry for `components/section/news-and-events/detail/news-four-section.tsx` alongside the glob patterns — safe to leave, but likely accidental. Don't replicate the pattern.
- `next.config.ts` is empty; there is no custom webpack, image domains, or redirects config to be aware of.
