import { ArticleTeaserCardProps } from '@/components/ArticleTeasers/ArticleTeaserCard'
import { ArticleTeaserCardPropsSmall } from '@/components/ArticleTeasers/ArticleTeaserCardSmall'
import { HomePageDesktop } from '@/components/HomePage/HomePageDesktop'
import { HomePageMobile } from '@/components/HomePage/HomePageMobile'
import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '@/constants'
import { frontPageStories } from '@/contentQueries/frontPageStories'

interface FrontPageStories {
  mainStory?: ArticleTeaserCardProps
  sideStories?: ArticleTeaserCardPropsSmall[]
}

export default async function Home() {
  const response = await getStories()
  const { mainStory, sideStories } = response

  return (
    <main className="w-full min-h-screen">
      <div className="hidden sm:flex">
        <HomePageDesktop mainStory={mainStory} sideStories={sideStories} />
      </div>

      <div className="flex sm:hidden">
        <HomePageMobile mainStory={mainStory} sideStories={sideStories} />
      </div>
    </main>
  )
}

const getStories = async (): Promise<FrontPageStories> => {
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
        title: item.title,
        description: item.description,
        imageUrl: item.heroImagesCollection?.items?.[0]?.url,
        imageDescription: item.heroImagesCollection?.items?.[0]?.description,
      }
    })

  return { mainStory, sideStories }
}
