[![Netlify Status](https://api.netlify.com/api/v1/badges/b85141d9-22dc-4cb4-aed2-27a1871f504a/deploy-status)](https://app.netlify.com/sites/rokmaastro/deploys)

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

---

## TO DO:

- OG IMAGES TEST & FIX
- ADD SEE MORE LIST AT POST FOOT
- MAYBE FIX ANNOYING DIFFERENT ANGLE ON WEBSITE IMAGES

## MAYBE:

- UNDERSTAND CHECK GRID AUTO-FIT/AUTO-FILL + .grid3, .grid_small
- MAYBE MORE NEW IMG FOR WEBSITES
- SCROLL ANIMATIONS MAYBE
- PRINTS AVAILABLE
- CASE STUDIES SECTION MAYBE

## LEARN MORE?

[Docs](https://docs.astro.build)
[Discord](https://astro.build/chat).
