# Changelog

All notable changes to this project are recorded here.
Versions before 1.12.0 live only in git history — see `git log` and `git tag`.

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
