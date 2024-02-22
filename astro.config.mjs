import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'

// https://astro.build/config
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
    }),
    partytown({
      // Example: Add dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],
  outDir: './dist',
  site: 'https://rokma.com/',
  base: '/'
})
