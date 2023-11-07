import { ArticleTeaserCardProps } from '@/components/ArticleTeasers/ArticleTeaserCard'
import { ArticleTeaserCardPropsSmall } from '@/components/ArticleTeasers/ArticleTeaserCardSmall'
import { ArticleTeaserCardXSmallProps } from '@/components/ArticleTeasers/ArticleTeaserCardXSmall'
import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '@/constants'
import { ArticleSchema } from '@/schemas/ArticleSchema'
import { AppLogger } from '@/services/Logger/Logger'
import { z } from 'zod'

interface FrontPageStories {
  mainStory?: ArticleTeaserCardProps
  sideStories?: ArticleTeaserCardPropsSmall[]
  allStories?: ArticleTeaserCardXSmallProps[]
}

export const queryFrontPageStories = `
{
  frontPageConfigCollection {
    items {
      slotName
      storiesCollection {
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
  }

  allArticles: articleCollection {
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
}`

const SlotSchema = z.object({
  slotName: z.string(),
  storiesCollection: z.object({
    items: z.array(ArticleSchema),
  }),
})

const ResponseDataSchema = z.object({
  frontPageConfigCollection: z.object({
    items: z.array(SlotSchema),
  }),
  allArticles: z.object({
    items: z.array(ArticleSchema),
  }),
})

export const fetchFrontPageStories = async (): Promise<FrontPageStories> => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CONTENTFUL_API_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: queryFrontPageStories }),
    }
  )

  const { data, errors } = await res.json()

  if (errors) {
    AppLogger.error('errors: ', errors)
    throw Error('Error: fetching fetchFrontPageStories')
  }

  const zodResponse = ResponseDataSchema.safeParse(data)

  if (!zodResponse.success) {
    const errorMessage =
      'Error: fetching fetchFrontPageStories - data is malformed'
    AppLogger.error(errorMessage, { data: zodResponse.error })
    throw Error(errorMessage)
  }

  const parsedData = zodResponse.data

  const topStoriesReferenceIds: string[] = []

  const mainStoryData = parsedData.frontPageConfigCollection.items.find(
    (item: any) => {
      if (item.slotName === 'mainStory') {
        item.storiesCollection.items.forEach((story: any) => {
          topStoriesReferenceIds.push(story.referenceId)
        })

        return true
      }
    }
  )?.storiesCollection.items[0]

  let mainStory

  if (mainStoryData) {
    mainStory = {
      referenceId: mainStoryData.referenceId,
      title: mainStoryData.title,
      description: mainStoryData.subtitle,
      imageUrl: mainStoryData.heroImagesCollection.items[0].url,
      imageDescription: mainStoryData.heroImagesCollection.items[0].description,
    }
  }

  const sideStories = parsedData.frontPageConfigCollection.items
    .find((item: any) => {
      if (item.slotName === 'sideStories') {
        item.storiesCollection.items.forEach((story: any) => {
          topStoriesReferenceIds.push(story.referenceId)
        })

        return true
      }
    })
    ?.storiesCollection.items.map((item: any) => {
      return {
        referenceId: item.referenceId,
        title: item.title,
        description: item.subtitle,
        imageUrl: item.heroImagesCollection.items[0].url,
        imageDescription: item.heroImagesCollection.items[0].description,
      }
    })

  const allStories = parsedData.allArticles.items
    .filter((item) => {
      // filter out top/highlighted stories
      return !topStoriesReferenceIds.includes(item.referenceId)
    })
    .map((item: any) => {
      return {
        referenceId: item.referenceId,
        title: item.title,
        description: item.subtitle,
        imageUrl: item.heroImagesCollection.items[0].url,
        imageDescription: item.heroImagesCollection.items[0].description,
      }
    })

  return { mainStory, sideStories, allStories }
}
