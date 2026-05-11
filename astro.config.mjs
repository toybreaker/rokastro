import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'always'
  },
  image: {
    dangerouslyProcessSVG: true
  },
  markdown: {
    drafts: true
  },
  integrations: [
    sitemap(),
    robotsTxt(),
    mdx({
      drafts: true
    })
    // partytown({
    //   // Example: Add dataLayer.push as a forwarding-event.
    //   config: {
    //     config: { debug: true },
    //     forward: ['dataLayer.push']
    //   }
    // })
  ],
  outDir: './dist',
  site: 'https://rokma.com/',
  base: '/'
})
