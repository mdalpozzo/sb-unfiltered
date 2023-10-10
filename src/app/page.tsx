import {
  ArticleTeaserCard,
  ArticleTeaserCardProps,
} from '@/components/ArticleTeaserCard'
import {
  ArticleTeaserCardPropsSmall,
  ArticleTeaserCardSmall,
} from '@/components/ArticleTeaserCardSmall'
import { ArticleTeaserCardXSmall } from '@/components/ArticleTeaserCardXSmall'
import { Section } from '@/components/Section'
import {
  CONTENTFUL_API_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  LINE_COLORS_DARK,
  LINE_COLORS_LIGHT,
} from '@/constants'
import { frontPageStories } from '@/contentQueries/frontPageStories'
import { MockArticle } from '@/mocks/MockArticle'

interface FrontPageStories {
  mainStory?: ArticleTeaserCardProps
  sideStories?: ArticleTeaserCardPropsSmall[]
}

export default async function Home() {
  const response = await getStories()
  const { mainStory, sideStories } = response

  return (
    <main className="w-full min-h-screen p-24">
      <div
        className={`grid grid-cols-6 divide-x divide-${LINE_COLORS_LIGHT} dark:divide-${LINE_COLORS_DARK} divide-solid mb-24`}
      >
        <div className="col-span-4 px-4">
          <ArticleTeaserCard
            title={mainStory?.title || 'error'}
            description={mainStory?.description || 'error'}
            imageUrl={mainStory?.imageUrl || 'error'}
            imageDescription={mainStory?.imageDescription || 'error'}
          />
        </div>

        <div className="grid grid-rows-2 gap-8 col-span-2 px-4">
          <div className="w-full">
            <ArticleTeaserCardSmall
              title={sideStories?.[0]?.title || 'error'}
              imageUrl={sideStories?.[0]?.imageUrl || 'error'}
              imageDescription={sideStories?.[0]?.imageDescription || 'error'}
            />
          </div>

          <div className="w-full">
            <ArticleTeaserCardSmall
              title={sideStories?.[1]?.title || 'error'}
              imageUrl={sideStories?.[1]?.imageUrl || 'error'}
              imageDescription={sideStories?.[1]?.imageDescription || 'error'}
            />
          </div>
        </div>
      </div>

      <Section label="Hidden Gems">
        <div className="grid grid-cols-4 mb-24 gap-8">
          <div>
            <ArticleTeaserCardXSmall
              title={MockArticle.title}
              description={MockArticle.description}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>
          <div>
            <ArticleTeaserCardXSmall
              title={MockArticle.title}
              description={MockArticle.description}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>
          <div>
            <ArticleTeaserCardXSmall
              title={MockArticle.title}
              description={MockArticle.description}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>
          <div>
            <ArticleTeaserCardXSmall
              title={MockArticle.title}
              description={MockArticle.description}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>
        </div>
      </Section>

      <Section label="Good Eats">
        <div className="grid grid-cols-4 mb-24 gap-8">
          <div>
            <ArticleTeaserCardXSmall
              title={MockArticle.title}
              description={MockArticle.description}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>
          <div>
            <ArticleTeaserCardXSmall
              title={MockArticle.title}
              description={MockArticle.description}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>
          <div>
            <ArticleTeaserCardXSmall
              title={MockArticle.title}
              description={MockArticle.description}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>
          <div>
            <ArticleTeaserCardXSmall
              title={MockArticle.title}
              description={MockArticle.description}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>
        </div>
      </Section>

      <Section label="Selfie Worthy">
        <div className="grid grid-cols-4 mb-24 gap-8">
          <div>
            <ArticleTeaserCardXSmall
              title={MockArticle.title}
              description={MockArticle.description}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>
          <div>
            <ArticleTeaserCardXSmall
              title={MockArticle.title}
              description={MockArticle.description}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>
          <div>
            <ArticleTeaserCardXSmall
              title={MockArticle.title}
              description={MockArticle.description}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>
          <div>
            <ArticleTeaserCardXSmall
              title={MockArticle.title}
              description={MockArticle.description}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>
        </div>
      </Section>
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

  console.log('data: ', data)

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
