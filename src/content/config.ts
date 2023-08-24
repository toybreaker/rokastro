import { z, defineCollection } from 'astro:content'

const works = defineCollection({
  schema: ({ image }) =>
    z.object({
      slag: z.string(),
      title: z.string(),
      category: z.string().optional().nullable(),
      year: z.number(),
      year2: z.number().optional().nullable(),
      where: z.string().optional().nullable(),
      images: z.array(image()),
      quality: z.string().optional().nullable().default('low'),
      catch: z.string().optional().nullable(),
      fineartprints_link: z.boolean().optional().nullable(),
      fumes_category: z.string().optional().nullable(),
      grid_small_images: z.boolean().optional().nullable().default(false),
      offwhite: z.boolean().optional().nullable().default(false),
      draft: z.boolean().optional().nullable()
    })
})

export const collections = {
  photography: works,
  branding: works,
  advertising: works,
  specials: works,
  'web-design': works
}
