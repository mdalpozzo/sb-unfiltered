import { ArticleTeaserCardProps } from '@/components/ArticleTeasers/ArticleTeaserCard'
import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '@/constants'
import { ArticleSchema } from '@/schemas/ArticleSchema'
import { AppLogger } from '@/services/Logger/Logger'
import { z } from 'zod'

export const articleByTag = `
    query( $tags: [String!]! ) {
        articleCollection(
            where: {
                contentfulMetadata: {
                    tags: { id_contains_some: $tags }
                }
            }
        ) {
            items {
                referenceId
                title
                subtitle
                body
                heroImagesCollection {
                    items {
                    title
                    description
                    url
                    }
                }
            }
        }
    }
`

interface FetchCategoryArticlesArgs {
  tags: string[]
}

const ResponseDataSchema = z.object({
  articleCollection: z.object({
    items: z.array(ArticleSchema),
  }),
})

export const fetchCategoryArticles = async ({
  tags,
}: FetchCategoryArticlesArgs): Promise<ArticleTeaserCardProps[]> => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CONTENTFUL_API_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: articleByTag,
        variables: {
          tags,
        },
      }),
    }
  )

  const { data, errors } = await res.json()

  if (errors) {
    AppLogger.error('errors: ', { data: errors })
    throw Error('Error: fetching articles')
  }

  const zodResponse = ResponseDataSchema.safeParse(data)

  if (!zodResponse.success) {
    const errorMessage =
      'Error: fetching fetchFrontPageStories - data is malformed'
    AppLogger.error(errorMessage, { data: zodResponse.error })
    throw Error(errorMessage)
  }

  const articles = zodResponse.data

  if (!articles) {
    AppLogger.error(
      `error - no articles found for category: ${tags.toString()}`,
      articles
    )
  }

  return articles.articleCollection.items.map((a) => {
    return {
      referenceId: a.referenceId,
      title: a.title,
      description: a.subtitle,
      imageUrl: a.heroImagesCollection.items[0].url,
      imageDescription: a.heroImagesCollection.items[0].description,
    }
  })
}
