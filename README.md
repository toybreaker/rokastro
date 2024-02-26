# [rokma.com](https://rokma.com/) w/ Astro & Fiko

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

# FIKO 👀 Setup

### 1. ADD type shorcut

To your `tsconfig.json`

```tsconfig.json

{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      ...
      "@fiko/*": ["node_modules/fiko/package/*"]
    }
  }
}

```

### 2. ADD FIKO TO ASTRO FRONTMATTER

Import fiko in any `.astro` files (`src/components/style.astro`) like this :

```style.astro
import '@fiko/fiko.css'
```

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

- make post about ROKMA.ART shots selection (with youtube videos too)
- ENABLE PAGE SPECIFIC DESC IN POSTS
- ADD SEE MORE LIST AT POST FOOT
- MAYBE FIX ANNOYING DIFFERENT ANGLE ON WEBSITE IMAGES

## MAYBE:

- UNDERSTAND CHECK GRID AUTO-FIT/AUTO-FILL
- MAYBE MORE NEW IMG FOR WEBSITES
- SCROLL ANIMATIONS MAYBE
- PRINTS AVAILABLE
- CASE STUDIES SECTION MAYBE

## LEARN MORE?

[Docs](https://docs.astro.build)
[Discord](https://astro.build/chat).

```

```
