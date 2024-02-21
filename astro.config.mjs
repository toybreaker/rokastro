import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
//import partytown from '@astrojs/partytown'

export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'always'
  },
  integrations: [
    mdx({
      extendMarkdownConfig: false,
      gfm: true
    })
    //partytown()
  ],
  outDir: './dist',
  site: 'https://rokma.com/',
  base: '/'
})
