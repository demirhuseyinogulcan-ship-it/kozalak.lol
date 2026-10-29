# Kozalak AI

Launch site for Kozalak AI, a product concept: a natural pine cone becomes the physical interface of a local-first AI device. The site tells the product story, shows the hardware and explains how the device fits into a home, in English, Japanese and Turkish.

**Live:** [kozalak.lol](https://kozalak.lol) · [kozalak-ai.pages.dev](https://kozalak-ai.pages.dev) (Japanese: [/ja](https://kozalak-ai.pages.dev/ja), Turkish: [/tr](https://kozalak-ai.pages.dev/tr))

![Kozalak AI home page](docs/screenshot.jpg)

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- React 19 and TypeScript
- Tailwind CSS 4
- Radix UI primitives with shadcn/ui-style components
- Framer Motion for scroll-driven motion
- Hosted on Cloudflare Pages

## What is in it

- Three languages from one component tree. Copy lives in `lib/i18n.ts`, each route passes its locale.
- Canonical URLs, `hreflang` alternates, sitemap, robots, web manifest and Open Graph image for every language.
- Product structured data (JSON-LD) in `components/structured-data.tsx`.
- Fully static output: no server, no database, no API keys.

## Project structure

```
app/
  page.tsx            English home
  ja/page.tsx         Japanese home
  tr/page.tsx         Turkish home
  layout.tsx          fonts, metadata, theme provider
  manifest.ts         web app manifest
  robots.ts           robots.txt
  sitemap.ts          sitemap.xml with hreflang alternates
components/
  home-page.tsx       page composition shared by all languages
  hero.tsx, product-story.tsx, product-gallery.tsx, stats.tsx,
  pricing.tsx, team-section.tsx, faq.tsx, navbar.tsx, footer.tsx
  structured-data.tsx JSON-LD
  ui/                 Radix-based building blocks
lib/
  i18n.ts             all copy in three languages
  utils.ts            class name helper
public/images/        product renders
```

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

The static site is written to `out/`. Any static host can serve it. To publish on Cloudflare Pages:

```bash
npx wrangler pages deploy out --project-name kozalak-ai
```

## Credits

The page layout started from an MIT-licensed template by Gonzalo Chalé (see `license.txt`). Product story, copy, renders and translations are by [commitius](https://commitius.com).
