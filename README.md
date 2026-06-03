[![Netlify Status](https://api.netlify.com/api/v1/badges/f6f6655a-c399-4564-bff5-158e0d698aae/deploy-status)](https://app.netlify.com/sites/rokmaastro/deploys)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Astro version](https://img.shields.io/github/package-json/dependency-version/toybreaker/rokastro/astro?logo=astro&logoColor=white&label=astro)](https://github.com/toybreaker/rokastro/blob/master/package.json)
[![License](https://img.shields.io/badge/license-Custom%20Reciprocity-blue)](./LICENSE.txt)

# [rokma.com](https://rokma.com/) w/ Astro & FLACO

## DEV SHORTCUTS

```shell
# Launch:
echo 'pup | pnpm upgrade';
pnpm upgrade
```

```shell
# Launch:
echo 'prc | pnpm run check';
pnpm run check
```

```shell
# Launch:
echo 'prd | pnpm run dev';
pnpm run dev
```

# CSS SYSTEM — FLACO 🐸

This site's CSS is **FLACO**, a local proto-fork of [FIKO](https://github.com/toybreaker/fiko) that lives and diverges inside this repo at `src/assets/css/flaco.css`. It is **not an npm package** — nothing to install, no `@fiko` path mapping. It's imported once, in the base layout, and applies site-wide:

```
// src/layouts/Layout.astro
import '@css/flaco.css'
```

### TLDR cheatsheet

![semantic HTML](https://img.shields.io/badge/follows-semantic_HTML-1a1a1a)
![almost classless](https://img.shields.io/badge/style-almost_classless-1a1a1a)
![non-verbose](https://img.shields.io/badge/non--verbose-&_clean-1a1a1a)
![dynamic sizing](https://img.shields.io/badge/dynamic_sizing-svh_·_svw_·_rem_·_ch-2ea44f)
![fixed sizing](https://img.shields.io/badge/fixed_sizing-px-blue)
![theme](https://img.shields.io/badge/theme-light_/_dark-8957e5)
![pure css theme](https://img.shields.io/badge/theme_engine-pure_CSS_·_no_JS-fb8500)

- **Sizing** — dynamic via `svh / svw / rem / ch`; fixed only in `px`. Spacing/radius/borders come from `--spaceLR`, `--spaceTB`, `--radius`, `--borderSize`.
- **Almost classless** — style semantic elements directly; reach for classes only when needed (`.container`, `.centre`, `.space`).
- **Light / dark** — automatic, OS-driven via `prefers-color-scheme`. Pure CSS: no toggle, no JS, no flash, and it persists across view transitions. Dark just re-points the colour vars (`--currentBGcolor`, `--currentTXTcolor`).

### Per-page theme lock (`bodyClass`)

A page can pin its background **regardless** of light/dark by setting a colour token in `bodyClass` (post frontmatter, or the page's `bodyClass` const). Text colour auto-contrasts.

| `bodyClass` token                        | result                                                                   |
| ---------------------------------------- | ------------------------------------------------------------------------ |
| _(none)_                                 | **adaptive** — follows the OS light/dark                                 |
| `black`, `darkgray`                      | locked **dark** bg, light text                                           |
| `white`, `offwhite`, `lightgray`, `gray` | locked **light** bg, dark text                                           |
| `grid_small`, `grid_big`                 | post gallery grid density (combine with a colour, e.g. `black grid_big`) |

# ADD YOUTUBE VIDEO

YouTube video embed component reusable and configurable in Astro. Pass the YouTube video ID as a prop to the component. Here's how you can refine the component to accept a video ID as a prop:

1. Define the Prop in the Astro Component: Start by defining the prop at the top of your Astro component file. This makes it clear that the component expects a video ID to be passed in.

2. Use the Prop in the `<iframe>` Source URL: Replace the placeholder VIDEO_ID in the `<iframe>` source URL with the prop.

Here's the code for the Astro component:

```YouTubeVideo.astro
---
// YouTubeVideo.astro
// Define the props that the component accepts
const { videoId } = Astro.props;
---
<style>
  .video-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
  }

  .video-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<div class="video-container">
  <iframe class="video-iframe"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
  </iframe>
</div>
```

Use the `YouTubeVideo.astro` in your Astro page like this:

```page.astro
---
// Import the YouTube video component
import YouTubeVideo from '@components/YouTubeVideo.astro';
---

<YouTubeVideo videoId="YOUR_VIDEO_ID_HERE" />
```

Use the `YouTubeVideo.astro` or in content by making the `.md` file into a `.mdx`, like this:

```page.mdx
---
// ... the usual frontmatter from `.md`
---
import YouTubeVideo from '@components/YouTubeVideo.astro'
<YouTubeVideo videoId="YOUR_VIDEO_ID_HERE" />
```

---

# TO DO:

- ENABLE PAGE SPECIFIC DESC IN POSTS
- ADD |satori| FOR OG META GENERATION as SHAMAN.MONSTER
- ADD |SEE MORE| LIST AT POST FOOT
- ADD |PRINTS AVAILABLE| (port: 11ty FUMES component)

## POSTS ABOUT:

- ROKMA.ART shots selection (with youtube videos)

## MAYBE:

- SCROLL ANIMATIONS
- CASE STUDIES SECTION
- UNDERSTAND CHECK GRID AUTO-FIT/AUTO-FILL
- MORE NEW IMG FOR WEBSITES
- FIX ANNOYING DIFFERENT ANGLE ON WEBSITE IMAGES

## LEARN MORE?

[Docs](https://docs.astro.build)
[Discord](https://astro.build/chat).

## COPYRIGHT

Copyright (c) 2025 Rokma. See LICENSE.txt for details.

```

```
