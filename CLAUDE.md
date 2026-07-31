# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **yarn** (yarn.lock is the lockfile — don't use npm/pnpm).

```bash
yarn install       # install deps
yarn dev            # start dev server (http://localhost:3000)
yarn build          # production build
yarn start          # run production build
yarn lint           # eslint
yarn format         # prettier --write src/
```

There is no test runner configured in this project (no test script, no jest/vitest).

Pre-commit: husky runs `lint-staged`, which runs `prettier --write` + `eslint --fix` on staged `*.{js,jsx,ts,tsx}` and `prettier --write` on staged `*.{css,scss,md,json}`. Don't bypass with `--no-verify`.

Environment: copy `.env.example` to `.env`. Relevant vars: `NEXT_PUBLIC_SITE_URL`, `BASIC_AUTH_ENABLED`/`BASIC_AUTH_NAME`/`BASIC_AUTH_PASSWORD`, `API_URL`.

## Architecture

Next.js 16 App Router + React 19 + TypeScript, Tailwind CSS v4 (config lives in `src/app/globals.css` via `@import 'tailwindcss'` and `@layer`, not a `tailwind.config.*` file). Path alias `@/*` → `src/*`.

### Routing (`src/app`)

- `(index)` is a route group — `src/app/(index)/page.tsx` renders at `/` without adding a URL segment. Its page-specific components live colocated under `src/app/(index)/components/`. Follow this pattern for other routes: page-only components go next to the page, cross-route components go in `src/components`.
- `src/app/layout.tsx` is the root layout: loads `Noto_Sans_JP` via `next/font/google` and applies it globally to `<body>`, wraps children in `<Providers>`, renders global `<Header>`/`<Footer>`, and mounts `sonner`'s `<Toaster>` with site-wide toast styling.
- `src/app/health/route.ts` — health check endpoint (`force-dynamic`, returns `{ status: 'OK' }`).
- `src/app/api/basicAuth/route.ts` — returns a 401 with `WWW-Authenticate` to trigger the browser's basic-auth prompt; paired with `src/proxy.ts` below.

### `src/proxy.ts` (Next.js 16's replacement for `middleware.ts`)

Runs on every request (`matcher: ['/', '/:path*']`) and does two things, in order:

1. Rejects requests whose `Host` header doesn't match `NEXT_PUBLIC_SITE_URL` (domain allowlist).
2. If `BASIC_AUTH_ENABLED === 'true'`, validates the `Authorization` header against `BASIC_AUTH_NAME`/`BASIC_AUTH_PASSWORD`, rewriting to `/api/basicAuth` (which sends the 401 challenge) when missing/invalid.

### Data flow: server actions + React Query, not client-side fetch

- `src/services/*.ts` are `'use server'` modules — server actions that call the external API at `${process.env.API_URL}` and normalize the result to `ServerResponse<T>` (`{ code, data }`, see `src/types/index.ts`). `ApiResponse<T>` is the raw shape from the upstream API; `ServerResponse<T>` is what the service functions return after unwrapping/error-handling (`data: null` on failure or `code !== 0`).
- `src/app/providers.tsx` (`'use client'`) wires up `QueryClientProvider` (TanStack React Query, `retry: 1`) and the Redux `Provider` around the whole app, plus `ReactQueryDevtools`.
- `withAuth()` (also in `src/services`) is a `'use server'` helper that reads the `token` cookie — call it from server actions/components that need the current auth token.

### Client state: Redux Toolkit (`src/store`)

Only for client-only UI state (e.g. modal visibility), not server data. `src/store/index.ts` combines slice reducers; add new slices under `src/store/slices/` and register them there. Use the typed hooks in `src/store/hooks.ts` (`useAppDispatch`, `useAppSelector`) rather than the raw react-redux hooks. `src/components/modal.tsx` is the pattern for slice-driven UI: reads `isOpen`/`name` from the `modal` slice, renders via `createPortal` into `document.body`, and only mounts client-side (`typeof window !== 'undefined'` guard).

### Types & validation

- `src/types/index.ts` — shared cross-cutting types (`ApiResponse`, `ServerResponse`).
- `src/types/<domain>.ts` — per-domain request/response types (e.g. `sample.ts`).
- `src/validations/<domain>.ts` — zod schemas + inferred input types for form validation, one file per domain, paired 1:1 with the types file.

### SEO / metadata

Centralized in `src/config/constants.ts` (`SITE_NAME`, `DEFAULT_DESCRIPTION`, `OG`, `TWITTER`, `OG_IMAGES`). Every page exports a Next `Metadata` object that spreads `OG`/`TWITTER` and overrides `title`/`url`/`canonical` for that route — copy the pattern in `src/app/(index)/page.tsx` or `src/app/sample/page.tsx` when adding pages.

### Styling conventions

- Tailwind utility classes only; no CSS modules/styled-components in use.
- `prettier-plugin-tailwindcss` auto-sorts class names on save/commit — don't hand-order them.
- `@trivago/prettier-plugin-sort-imports` enforces import group order: `react` → `react-*` → builtins → third-party → `@/*` alias → relative (`./`/`../`) imports, each group blank-line separated. ESLint's own `import/order`/`sort-imports` are disabled in favor of this.
- `@next/next/no-img-element` is disabled — plain `<img>` is allowed alongside `next/image`.
- Static assets referenced by absolute path (e.g. `/assets/images/...`) live in `public/assets/images/`.

### Layout & positioning rules

- **Units**:
  - `font-size`: always use `px`.
  - `padding`, `margin`, `top`, `bottom`, `left`, `right`, and other spacing/positioning classes: **prefer existing Tailwind utility classes/scale first** (e.g. `p-4`, `mt-2`, `gap-6`). Only fall back to arbitrary `px` values (e.g. `p-[13px]`, `top-[7px]`) when no existing class in the scale matches the required value.
- **Typography**: Do not extract or apply `letter-spacing` values from Figma — skip this property entirely when converting design to code.
- **`flex-col gap-*`**: Avoid using `flex flex-col gap-*` on general containers — children inside a container are often not evenly spaced in the actual design, so a single `gap` value can silently produce wrong spacing. Only use `flex-col gap-*` for genuinely repeating/list-like items (e.g. a list of cards, a list of menu items) where spacing between all children is uniform. For containers with mixed/irregular children, use individual `margin` on each child instead.
- **Reversed items**: For items that alternate or reverse direction (e.g. alternating rows in a repeating list, zig-zag layouts), do not implement this via a `reverse` prop passed into the component. Use Tailwind's own utilities instead — `even:`/`odd:` variants for alternating items, or `flex-row-reverse`/`flex-col-reverse` for direction reversal — applied directly with CSS classes.
- **`position: absolute`**: Avoid `absolute` positioning unless it is genuinely the only way to achieve the required layout. Figma designs export almost everything as absolute by default — this is not a valid reason to use it in code. If `absolute` positioning seems necessary, **stop and ask the user for confirmation before applying it**, rather than assuming it's required.
- **`@container` queries**: `@container` with `cqw`/`cqh` units may be used for select components when explicitly requested. When the user asks for container-query-based sizing on a component, apply it **consistently across the entire component** — not mixed with fixed-unit rules in the same component.

### Image assets from Figma

- When exporting images from Figma (via Figma MCP or manually), **all raster images (PNG, JPG, WebP, etc.) must be exported at 2x resolution** — double the pixel dimensions shown in the Figma frame. The exported file itself is 2x, but the display size in code (CSS/HTML `width`/`height`, or `next/image` props) stays at the original 1x design value.
- **SVG is exempt** — export SVG at its native vector size as-is.
- Use normal, descriptive file naming — do not append `@2x` or similar resolution suffixes to the filename.
- **PNG exports must have a transparent background** (no white/solid background fill), unless the design explicitly requires an opaque background.
- **Complex detail groups**: If a section of the design contains overly complex/intricate details that would be impractical or unreliable to rebuild precisely in code (e.g. dense illustrations, decorative graphic clusters, complex layered effects), it's acceptable to group those layers in Figma and export the group as a single flattened image, rather than reconstructing every element with HTML/CSS.

### Locale

Site is Japanese (`<html lang="ja">`, `og:locale ja_JP`); UI copy, validation error messages, etc. are written in Japanese throughout — match this in new code.
