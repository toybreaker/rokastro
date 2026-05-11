import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

const works = defineCollection({
  loader: glob({
    pattern: '**/index.{md,mdx}',
    base: './src/content/posts',
    generateId: ({ entry }) => entry.split('/')[0]
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(),
      year: z.number(),
      year2: z.number().optional().nullable(),
      where: z.string().optional().nullable(),
      images: z.array(image()),
      quality: z.string().optional().nullable().default('low'),
      featured: z.boolean().optional().nullable(),
      home: z.boolean().optional().nullable(),
      tags: z.array(z.string()),
      bodyClass: z.string().optional().nullable().default(''),
      fineartprints_link: z.boolean().optional().nullable(),
      fumes_category: z.string().optional().nullable(),
      draft: z.boolean().optional().nullable()
    })
})

export const collections = {
  posts: works
}
