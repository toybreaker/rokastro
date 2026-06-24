# Changelog

All notable changes to this project are recorded here.
Versions before 1.12.0 live only in git history — see `git log` and `git tag`.

## 2.1.1 - 2026-06-24

**Fixed**

- Testimonials: corrected two names — "Greg Rankinev" → "Greg Rankin", "Joan Epher" → "Joan Epher Phillips".

## 2.1.0 - 2026-06-24

**Dep bumps**

- `@types/node` 22 → 26 and `sharp` 0.34.5 → 0.35.2. No new type errors (`astro check` clean); build green (137 pages).

**Removed**

- Pruned 4 unused dependencies with zero import sites: `@sindresorhus/slugify`, `cross-spawn`, `autoprefixer`, `mdast-util-to-string` (~17 transitive packages gone). No standalone rollup to remove — Astro/Vite bundle their own.

## 2.0.0 - 2026-06-24

**Migration**

- Upgraded to **Astro 7** (from 6.4.8) — also `@astrojs/mdx` 7. Astro 7 ships Vite 8 with a new Rust template compiler and lightningcss as the default CSS minifier.

**Fixes**

- **flaco.css**: moved the `:root` closing brace so the `--icon-*` custom properties sit *inside* the rule block instead of dangling after it. The old placement was invalid CSS that the stricter Astro 7 / lightningcss pipeline surfaced.

**Build config**

- Removed a leftover `allowBuilds` placeholder from `pnpm-workspace.yaml`; esbuild / sharp / @parcel/watcher post-install builds are already governed by `onlyBuiltDependencies`.
- Carries forward the dependency bumps from the un-changelogged 1.18.3.

## 1.18.2 - 2026-06-03

**Security**

- Forced the transitive `yaml` dependency to `>= 2.8.3` (was 2.7.1) via a pnpm `overrides` entry, resolving the Dependabot advisory. `yaml` is pulled in only through the dev dependency `@astrojs/check` (→ `@astrojs/language-server` → `yaml-language-server`), so this is dev-tooling only with no runtime or shipped-site impact.

**Chore**

- Migrated pnpm settings (`onlyBuiltDependencies` for `@parcel/watcher` / `esbuild` / `sharp`) from the deprecated `package.json` `pnpm` field into `pnpm-workspace.yaml` — pnpm 11 no longer reads the former (it was warning on every install). The override above lives there too.

## 1.18.1 - 2026-06-03

**Fixed**

- Search went dead after any in-site navigation: `ClientRouter` (added in 1.17.0) swaps the `<body>`, replacing the search input, but the listeners were bound only once at module load — so they were lost after the first click-through and only a full reload revived search. Now the binding runs on `astro:page-load` (initial load + every view-transition swap), re-querying the fresh DOM, with a double-bind guard and the Pagefind module cached at module scope.
- About page: removed the empty banded gap at the top — the page provides no header slot, so Layout's `<header>` rendered as a padded, faintly-tinted strip; it's now hidden so the body starts at the top.

**Changed**

- Specials index background locked white (was adaptive / OS-driven).

## 1.18.0 - 2026-06-03

**Added**

- Light/dark mode, OS-driven: adaptive pages (home, category/tag indexes, about, untokenised posts) now follow `prefers-color-scheme` — explicit light default with a dark override via media query. Pure CSS: no toggle, no JS, no flash-of-wrong-theme, and it persists across view transitions. Dark just re-points the colour vars, so `background-color`/`color` update live.
- Per-post theme lock via the existing `bodyClass` token: `black`, `darkgray`, `gray`, `lightgray`, `offwhite`, `white` now pin a page's background and auto-contrast text colour **regardless** of light/dark mode — so posts shot on a set background (e.g. black seamless) keep that background in any theme. Added a grey-scale of `--color-*` tokens to back it.

**Fixed**

- `bodyClass` colour tokens previously had no CSS rules or variables behind them, so a `bodyClass: black` post only rendered dark when the visitor's OS happened to be in dark mode (and showed on white otherwise). They now lock correctly and independently of the OS theme.
- About page: centred the "What are Rokma's clients saying." testimonials heading.

**Changed**

- Branding and advertising index backgrounds are now locked white (branding was `lightgray`; advertising was adaptive/OS-driven).
- Renamed `fiko.css` → `flaco.css` to mark it as the local proto-fork of the now-separate FIKO framework — kept and edited freely here, not synced from the FIKO repo.

**Removed**

- Dead theme-toggle CSS left over from the removed JS toggle (`.theme_switch` + its sun/moon `data-theme` rules) and the dead `[data-theme]` light/dark blocks in the theme engine; plus an experimental `[data-theme='dark']` shake animation in the tests layer.
- A global `:root { --currentTXTcolor: black }` override leaking out of the `Card` component, which forced card titles black regardless of theme. Card titles now follow the page theme (white on dark, black on light); this was masked before by the old higher-specificity dark rule and surfaced on the adaptive listing pages (home, advertising, specials). Also dropped the dead `.title span` rule (no matching markup) that referenced an undefined `--gray`.

## 1.17.0 - 2026-06-03

**Added**

- Astro page transitions (`ClientRouter`) site-wide: clicking a post thumbnail now morphs the image up into the maximised hero at the top of the post page. Matching `transition:name` (`hero-${category}-${id}`) is set on the `Card` thumbnail and the post hero, so the morph fires from the home page, all five category indexes (featured cards), and tag pages into the destination post.

**Changed**

- Post layout restructured for predictable transitions: `images[0]` is lifted into a dedicated full-width hero at the top of the template (natural aspect ratio, so the morph is a pure scale with no distortion); the gallery below renders `images[1..n]`. The hero is eager / high-priority / sync-decoded; gallery images stay lazy.

**Performance**

- New `PreloadHeroes` component warms the next page's hero: listing pages (home, category indexes, tag pages) emit `<link rel="prefetch" as="image">` for each post's hero, computed via `getImage()` with the exact width/format/quality of the rendered hero so the prefetched asset is byte-for-byte the one the post page requests. Eliminates the blank-then-repaint flash during the morph.

**Removed**

- Deleted unused `PostNew.astro` layout (referenced nowhere in the project).

## 1.16.1 - 2026-06-03

**Fixed**

- Google Analytics was silently dead since `1.11.1`: the `GoogleAnalytics` component still emitted `type="text/partytown"` scripts, but the Partytown integration had been removed from `astro.config.mjs`, so gtag never executed. Re-enabled `partytown()` (with `forward: ['dataLayer.push']`); `dist/~partytown/` worker scripts now ship and GA4 (`G-BMWDP7VL43`) runs off the main thread again.

## 1.16.0 - 2026-06-03

**Content**

- New Book Bat post (`websites`, featured + on home): free offline-first book-cataloguing app — barcode scan to build your shelf, no account/cloud/tracking, exports to spreadsheet/Goodreads/LibraryThing. Built with Svelte 5 (editor) + Astro 6 (Baobab browser), PWA on Cloudflare Workers; links to the [live app](https://bat.junglestar.org) and [GitHub source](https://github.com/junglesta/bookbat).

## 1.15.0 - 2026-06-02

**Added**

- Site search powered by [Pagefind](https://pagefind.app) — custom UI (no `@pagefind/default-ui`), opened from a new search icon left of the menu button into a full-screen modal. Indexes all posts (title, category, thumbnail, excerpt); results show category-over-title with highlighted excerpts. Build now runs `astro build && pagefind --site dist`; `Post.astro` tags content with `data-pagefind-body` + meta, so only posts are indexed.

**Removed / Cleanup**

- Deleted dead theme components (`ThemeProvider`, `ThemeToggle`, `NavThemeToggle`, `NavThemeToggleOk`) and stripped commented-out leftovers: the top-of-source FIKO `<style>` block (rendered before `<!DOCTYPE>`), the ServiceWorker registration, the `partytown` config block, and `Underline`/`ThemeToggle` references. Theme stays `prefers-color-scheme`-driven.

**Content**

- Hippy Chic post: corrected title spelling, added images.
- Homepage hero: new AI/human copy lines (with spelling/grammar fixes).

**Fixed**

- Post tag-section divider border was invisible (`var(--)` → `var(--currentTXTcolor)`).

## 1.14.1 - 2026-06-02

**Content / Copy**

- Site-wide English proofread — fixed spelling, grammar (subject-verb agreement, articles, missing words) and en-GB consistency across the portfolio. Main edits in `burn-trash`, `women-flowers-and-dances`, `davina-stephens`, plus typo fixes in `concrete-skatepark` (payed→paid), `kaosguerrila` (startegy→strategy), `wherenodoctor`, `videos`, `skatesnowboard`, `fumes`, `binocle`, and the homepage hero (Efficent→Efficient, recognizable→recognisable).
- Copy tweaks to `icons` and `kala-surfcamp` posts.

## 1.14.0 - 2026-06-02

**Content / UX**

- Redesigned the Instagram icon (`src/icons/instagram.svg`) — cleaner rounded-square glyph.
- Junglo Shoes post: removed the dead `jungloshoes.com` link (site retired), now noted as "Now retired."

**Tooling**

- Added `clean` script — clears Astro/Vite caches (`.astro`, `node_modules/.astro`, `node_modules/.vite`).
- `dev` now runs `clean` before `astro dev`, so each dev start begins from a fresh cache.

**Docs**

- README: added Built-with-Astro, Astro-version, and License badges alongside the Netlify deploy-status badge.

## 1.13.0 - 2026-06-02

**Security**

- devalue 5.8.0 → 5.8.1 — patches DoS via sparse array deserialization (GHSA, affected `>=5.6.3 <=5.8.0`). Pulled in transitively via the astro bump below. Resolves Dependabot alert #111.

**Dep bumps**

- astro 6.3.1 → 6.4.2
- @astrojs/mdx 5.0.4 → 6.0.1
- @astrojs/sitemap 3.7.2 → 3.7.3
- @astrojs/ts-plugin 1.10.7 → 1.10.9
- @types/node 22.19.18 → 22.19.19

**Tooling**

- pnpm-workspace.yaml: resolved `allowBuilds` placeholders — `esbuild` and `sharp` set to `true`.

## 1.12.1 - 2026-05-11

**Tooling**

- Added `deploy:preview` and `deploy:prod` scripts (Netlify CLI, local-build → upload, MW-style). Both pass `--no-build` so Netlify doesn't re-run the site's UI-configured build command.
- Added `.netlify/` to `.gitignore` (CLI cache directory).

## 1.12.0 - 2026-05-11

**Major dep bumps**

- astro 5.13.5 → 6.3.1
- @astrojs/mdx 4.3.4 → 5.0.4
- typescript 5.8.3 → 6.0.3
- @types/node 20 → 22 (vite 7 peer requirement)
- pnpm 10 → 11.1.0

**Minor dep bumps**: @astrojs/check, partytown, rss, sitemap, ts-plugin, autoprefixer, prettier, prettier-plugin-astro, sharp.

**Removed**

- `astro-icon` (incompatible with Astro 6) — replaced by local `src/components/Icon.astro` that inlines from `src/icons/*.svg` at a uniform 42 px.

**Astro 6 migration**

- `src/content/config.ts` → `src/content.config.ts` with `glob()` loader + `generateId` (preserves folder-name slugs).
- `post.slug` → `post.id`, `post.render()` → `render(post)` across 7 page files.
- `astro.config.mjs`: removed duplicate `defineConfig` import; added `image.dangerouslyProcessSVG: true`.
- `z` from `astro:content` → `astro/zod` (deprecation fix; removal in Astro 7).
- pnpm `onlyBuiltDependencies` whitelist added for sharp / esbuild / @parcel/watcher.

**Content / UX**

- British English spell-check across 13 markdown files.
- Recovered orphaned `hippy-chic` post (renamed `inbdex.md` → `index.md`).
- Card hover effect moved to `a.post` so the full link area triggers the image effect.
- `user-select: none` on Card images and buttons.
- Tag page heading flex-aligned with icon.
- SoundCloud icon intrinsic-size fix.
- Twitter URL → `x.com/rokmatwit`.
