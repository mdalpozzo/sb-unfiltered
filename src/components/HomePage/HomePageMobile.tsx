import { MockArticle } from '@/mocks/MockArticle'
import { ArticleTeaserCard, ArticleTeaserCardProps } from '../ArticleTeaserCard'
import {
  ArticleTeaserCardPropsSmall,
  ArticleTeaserCardSmall,
} from '../ArticleTeaserCardSmall'

interface HomePageMobileProps {
  mainStory?: ArticleTeaserCardProps
  sideStories?: ArticleTeaserCardPropsSmall[]
}

export const HomePageMobile = ({
  mainStory,
  sideStories,
}: HomePageMobileProps) => {
  return (
    <div
      className={`grid grid-cols-1 divide-y divide-solid divide-light-line dark:divide-dark-line`}
    >
      <div className="pb-6">
        <ArticleTeaserCard
          title={mainStory?.title || 'error'}
          description={mainStory?.description || 'error'}
          imageUrl={mainStory?.imageUrl || 'error'}
          imageDescription={mainStory?.imageDescription || 'error'}
        />
      </div>

      {sideStories?.map((story) => {
        return (
          <div key={story?.title} className="pt-6 pb-6">
            <ArticleTeaserCardSmall
              title={story?.title}
              imageUrl={story?.imageUrl}
              imageDescription={story?.imageDescription}
            />
          </div>
        )
      })}

      {/* TODO: add more section */}

      {Array.from(Array(5)).map((_, index) => {
        return (
          <div key={index} className="pt-6 pb-6">
            <ArticleTeaserCardSmall
              title={MockArticle.title}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>
        )
      })}
    </div>
  )
}
