import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'always'
  },
  experimental: {
    contentCollectionCache: true
  },
  integrations: [
    mdx({
      extendMarkdownConfig: false,
      gfm: true
    })
  ],
  outDir: './dist',
  site: 'https://rokma.com/',
  base: '/'
})
