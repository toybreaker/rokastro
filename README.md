[![Netlify Status](https://api.netlify.com/api/v1/badges/3df602d2-8b9d-475f-9fe7-1f07ad1081cb/deploy-status)](https://app.netlify.com/sites/rokastro/deploys)

# [n.rokma.com v0.12.01](https://n.rokma.com/) w/ Astro & Fiko

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

- OG IMAGES
- ADD SEE MORE LIST AT POST FOOT
- SEARCH FOR HI-RES OG IMAGES, DONE:
  - 55DSL
  - NEW WEBSITES
  -

## MAYBE:

- UNDERSTAND CHECK GRID AUTO-FIT/AUTO-FILL + .grid3, .grid4
- MAYBE MORE NEW IMG FOR WEBSITES
- SCROLL ANIMATIONS MAYBE
- PRINTS AVAILABLE
- CASE STUDIES SECTION MAYBE

## LEARN MORE?

[Docs](https://docs.astro.build)
[Discord](https://astro.build/chat).
