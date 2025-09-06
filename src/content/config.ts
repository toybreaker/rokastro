// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob, file } from 'astro/loaders'

// 3. Define your collection(s)
const works = defineCollection({
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

const about = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      images: z.array(image()).optional().nullable(),
      image: z.string(image()).optional().nullable(),
      quality: z.string().optional().nullable().default('low')
    })
})
const redflags = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      images: z.array(image()).optional().nullable(),
      image: z.string(image()).optional().nullable(),
      quality: z.string().optional().nullable().default('low')
    })
})
// 4. Export a single `collections` object to register your collection(s)
export const collections = {
  posts: works,
  about: about,
  redflags: redflags
}
