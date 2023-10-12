import { ArticleTeaserCardProps } from '@/components/ArticleTeasers/ArticleTeaserCard'
import { ArticleTeaserCardPropsSmall } from '@/components/ArticleTeasers/ArticleTeaserCardSmall'
import { ArticleTeaserCardXSmallProps } from '@/components/ArticleTeasers/ArticleTeaserCardXSmall'
import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '@/constants'

interface FrontPageStories {
  mainStory?: ArticleTeaserCardProps
  sideStories?: ArticleTeaserCardPropsSmall[]
  allStories?: ArticleTeaserCardXSmallProps[]
}

export const frontPageStories = `
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

export const fetchFrontPageStories = async (): Promise<FrontPageStories> => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CONTENTFUL_API_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: frontPageStories }),
    }
  )

  const { data, errors } = await res.json()

  // TODO handle errors and validation

  if (errors) {
    console.log('errors: ', errors)
  }

  const mainStoryData = data?.frontPageConfigCollection?.items.find(
    (item: any) => {
      return item?.slotName === 'mainStory'
    }
  )?.storiesCollection?.items[0]

  let mainStory

  if (mainStoryData) {
    mainStory = {
      referenceId: mainStoryData.referenceId,
      title: mainStoryData.title,
      description: mainStoryData.subtitle,
      imageUrl: mainStoryData.heroImagesCollection?.items?.[0]?.url,
      imageDescription:
        mainStoryData.heroImagesCollection?.items?.[0]?.description,
    }
  }

  const sideStories = data?.frontPageConfigCollection?.items
    .find((item: any) => {
      return item?.slotName === 'sideStories'
    })
    ?.storiesCollection?.items.map((item: any) => {
      return {
        referenceId: item.referenceId,
        title: item.title,
        description: item.subtitle,
        imageUrl: item.heroImagesCollection?.items?.[0]?.url,
        imageDescription: item.heroImagesCollection?.items?.[0]?.description,
      }
    })

  const allStories = data?.allArticles?.items.map((item: any) => {
    return {
      referenceId: item.referenceId,
      title: item.title,
      description: item.subtitle,
      imageUrl: item.heroImagesCollection?.items?.[0]?.url,
      imageDescription: item.heroImagesCollection?.items?.[0]?.description,
    }
  })

  return { mainStory, sideStories, allStories }
}
