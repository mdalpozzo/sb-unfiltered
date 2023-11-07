import { z } from 'zod'

const HeroImagesCollectionSchema = z.object({
  items: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      url: z.string(),
    })
  ),
})

export const ArticleSchema = z.object({
  referenceId: z.string(),
  title: z.string(),
  subtitle: z.string(),
  body: z.string(),
  heroImagesCollection: HeroImagesCollectionSchema,
})
