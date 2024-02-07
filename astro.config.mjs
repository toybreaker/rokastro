import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import yaml from '@rollup/plugin-yaml' //currently using .json only
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
  vite: {
    //maybe needed, not yet used! currently using .json
    plugins: [yaml()]
  },
  outDir: './dist',
  site: 'https://n.rokma.com/',
  base: '/'
})
