# ilanherbach.dev

Personal portfolio — Next.js 14 + a real-time WebGL particle galaxy built with Three.js / React Three Fiber and custom GLSL shaders.

## Getting started

Requires [pnpm](https://pnpm.io) (the version is pinned in `package.json` via `packageManager`, so `corepack enable` picks it up automatically).

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Structure

| Path | What |
| --- | --- |
| `src/three/` | WebGL background: `Scene.tsx` (canvas, pointer/scroll tracking), `Galaxy.tsx` (particle geometry + animation), `shaders.ts` (GLSL) |
| `src/components/` | UI: nav, hero, sections (about, stack, projects, contact), reveal animations |
| `src/i18n/` | PT/EN copy (`content.ts`) and language context — **edit your texts here** |
| `src/styles/globals.css` | Design tokens and all styles |

## Notes

- The 3D scene is client-only (`next/dynamic` with `ssr: false`), lowers its particle count on phones / low-core devices, and freezes animation when `prefers-reduced-motion` is set.
- Language choice is remembered in `localStorage` and defaults to the browser language.
