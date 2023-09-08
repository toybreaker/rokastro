import { z, defineCollection } from 'astro:content'

const works = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(),
      year: z.number(),
      year2: z.number().optional().nullable(),
      where: z.string().optional().nullable(),
      index_image: z.string(image()).optional().nullable(),
      images: z.array(image()),
      quality: z.string().optional().nullable().default('low'),
      fineartprints_link: z.boolean().optional().nullable(),
      fumes_category: z.string().optional().nullable(),
      featured: z.boolean().optional().nullable(),
      showcased: z.boolean().optional().nullable(),
      tags: z.array(z.string()),
      bodyClass: z.string().optional().nullable().default(''),
      draft: z.boolean().optional().nullable()
    })
})

export const collections = {
  posts: works
}
