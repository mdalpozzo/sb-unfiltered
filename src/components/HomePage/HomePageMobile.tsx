import {
  ArticleTeaserCard,
  ArticleTeaserCardProps,
} from '../ArticleTeasers/ArticleTeaserCard'
import {
  ArticleTeaserCardPropsSmall,
  ArticleTeaserCardSmall,
} from '../ArticleTeasers/ArticleTeaserCardSmall'
import { ArticleTeaserCardXSmallProps } from '../ArticleTeasers/ArticleTeaserCardXSmall'

interface HomePageMobileProps {
  mainStory?: ArticleTeaserCardProps
  sideStories?: ArticleTeaserCardPropsSmall[]
  allStories?: ArticleTeaserCardXSmallProps[]
}

export const HomePageMobile = ({
  mainStory,
  sideStories,
  allStories,
}: HomePageMobileProps) => {
  return (
    <div
      className={`grid grid-cols-1 divide-y divide-solid divide-light-line dark:divide-dark-line`}
    >
      <div className="pb-6">
        <ArticleTeaserCard
          referenceId={mainStory?.referenceId || 'error'}
          title={mainStory?.title || 'error'}
          description={mainStory?.description || 'error'}
          imageUrl={mainStory?.imageUrl || 'error'}
          imageDescription={mainStory?.imageDescription || 'error'}
        />
      </div>

      {sideStories?.map((story) => {
        return (
          <div key={story.referenceId} className="pt-6 pb-6">
            <ArticleTeaserCardSmall
              referenceId={story.referenceId}
              title={story.title}
              imageUrl={story.imageUrl}
              imageDescription={story.imageDescription}
            />
          </div>
        )
      })}

      {/* TODO: add more section */}

      {allStories?.map((story) => {
        return (
          <div key={story.referenceId} className="pt-6 pb-6">
            <ArticleTeaserCardSmall
              referenceId={story.referenceId}
              title={story.title}
              imageUrl={story.imageUrl}
              imageDescription={story.imageDescription}
            />
          </div>
        )
      })}
    </div>
  )
}
