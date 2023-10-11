import { MockArticle } from '@/mocks/MockArticle'
import { ArticleTeaserCard, ArticleTeaserCardProps } from '../ArticleTeaserCard'
import {
  ArticleTeaserCardPropsSmall,
  ArticleTeaserCardSmall,
} from '../ArticleTeaserCardSmall'
import { LINE_COLORS_DARK, LINE_COLORS_LIGHT } from '@/constants'

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
      // todo clsx would make this easier to read
      className={`grid grid-cols-1 divide-y divide-solid divide-${LINE_COLORS_LIGHT} dark:divide-${LINE_COLORS_DARK}`}
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
