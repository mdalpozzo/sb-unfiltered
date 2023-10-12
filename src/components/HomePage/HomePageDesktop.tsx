import {
  ArticleTeaserCard,
  ArticleTeaserCardProps,
} from '../ArticleTeasers/ArticleTeaserCard'
import {
  ArticleTeaserCardPropsSmall,
  ArticleTeaserCardSmall,
} from '../ArticleTeasers/ArticleTeaserCardSmall'
import {
  ArticleTeaserCardXSmall,
  ArticleTeaserCardXSmallProps,
} from '../ArticleTeasers/ArticleTeaserCardXSmall'
import { MoreSectionDesktop } from '../MoreSection'
import { MainSection } from '../MainSection'

interface HomePageDesktopProps {
  mainStory?: ArticleTeaserCardProps
  sideStories?: ArticleTeaserCardPropsSmall[]
  allStories?: ArticleTeaserCardXSmallProps[]
}

// TODO maybe display todays date would look good instead of "Highlights", or maybe just somewhere on the page

export const HomePageDesktop = ({
  mainStory,
  sideStories,
  allStories,
}: HomePageDesktopProps) => {
  return (
    <div>
      <MainSection label="Highlights">
        <div
          className={`grid grid-cols-6 divide-x divide-solid divide-light-line dark:divide-dark-line mb-20`}
        >
          <div className="col-span-4 pr-4">
            <ArticleTeaserCard
              referenceId={mainStory?.referenceId || 'error'}
              title={mainStory?.title || 'error'}
              description={mainStory?.description || 'error'}
              imageUrl={mainStory?.imageUrl || 'error'}
              imageDescription={mainStory?.imageDescription || 'error'}
            />
          </div>

          <div className="grid grid-rows-2 gap-8 col-span-2 pl-4">
            <div className="w-full">
              <ArticleTeaserCardSmall
                referenceId={sideStories?.[0]?.referenceId || 'error'}
                title={sideStories?.[0]?.title || 'error'}
                imageUrl={sideStories?.[0]?.imageUrl || 'error'}
                imageDescription={sideStories?.[0]?.imageDescription || 'error'}
              />
            </div>

            <div className="w-full">
              <ArticleTeaserCardSmall
                referenceId={sideStories?.[1]?.referenceId || 'error'}
                title={sideStories?.[1]?.title || 'error'}
                imageUrl={sideStories?.[1]?.imageUrl || 'error'}
                imageDescription={sideStories?.[1]?.imageDescription || 'error'}
              />
            </div>
          </div>
        </div>
      </MainSection>

      <MoreSectionDesktop label="Hidden Gems">
        <div className="grid grid-cols-4 mb-24 gap-8">
          {allStories?.map((story) => {
            return (
              <div key={story.referenceId} className="w-full">
                <ArticleTeaserCardXSmall
                  referenceId={story.referenceId}
                  title={story.title}
                  description={story.description}
                  imageUrl={story.imageUrl}
                  imageDescription={story.imageDescription}
                />
              </div>
            )
          })}
        </div>
      </MoreSectionDesktop>

      <MoreSectionDesktop label="Good Eats">
        <div className="grid grid-cols-4 mb-24 gap-8">
          {allStories?.map((story) => {
            return (
              <div key={story.referenceId}>
                <ArticleTeaserCardXSmall
                  referenceId={story.referenceId}
                  title={story.title}
                  description={story.description}
                  imageUrl={story.imageUrl}
                  imageDescription={story.imageDescription}
                />
              </div>
            )
          })}
        </div>
      </MoreSectionDesktop>

      <MoreSectionDesktop label="Selfie Worthy">
        <div className="grid grid-cols-4 mb-24 gap-8">
          {allStories?.map((story) => {
            return (
              <div key={story.referenceId}>
                <ArticleTeaserCardXSmall
                  referenceId={story.referenceId}
                  title={story.title}
                  description={story.description}
                  imageUrl={story.imageUrl}
                  imageDescription={story.imageDescription}
                />
              </div>
            )
          })}
        </div>
      </MoreSectionDesktop>
    </div>
  )
}
