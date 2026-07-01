# rackwall-website

Landing page for [RackWall](https://github.com/BobToTheRob/filament-manager) — a self-hosted filament inventory and maker workshop companion.

## Stack

- Vite + React 19 + TypeScript
- Tailwind v4 (`@tailwindcss/vite` plugin, `@theme inline` token setup)
- Inter via `@fontsource/inter`
- pnpm

## Local dev

```bash
pnpm install
pnpm dev       # Vite dev server → http://localhost:5173
pnpm build     # production build → dist/
pnpm preview   # preview production build locally
```

## Deploying to Cloudflare Pages

Connect this repo in the Cloudflare Pages dashboard with these settings:

| Setting | Value |
|---------|-------|
| Framework preset | Vite (or None) |
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Node version | 20 (default) |

pnpm is auto-detected from the lockfile — no extra environment variables needed.

The site will eventually serve at **rackwall.org** (DNS wiring is a manual step in Cloudflare).

## Brand

Design tokens (`--rw-*`) and the dot-grid mark (`RackWallLoader`) are copied from the `filament-manager` app and kept in sync manually. Illuminated-workshop (dark) is the default theme; daylight-workshop tokens are included for future use.
