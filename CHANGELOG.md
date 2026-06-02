# Changelog

All notable changes to this project are recorded here.
Versions before 1.12.0 live only in git history — see `git log` and `git tag`.

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
