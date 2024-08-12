import { z, defineCollection } from "astro:content";

const articleCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    location: z.string().optional(),
    hidden: z.boolean().optional().default(false),
  })
})

export const collections = {
  'articles': articleCollection
}
