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
      <div
        className={`grid grid-cols-6 divide-x divide-solid divide-light-line dark:divide-dark-line mb-20`}
      >
        <div className="col-span-4 pr-8">
          <MainSection label="Highlights">
            <ArticleTeaserCard
              referenceId={mainStory?.referenceId || 'error'}
              title={mainStory?.title || 'error'}
              description={mainStory?.description || 'error'}
              imageUrl={mainStory?.imageUrl || 'error'}
              imageDescription={mainStory?.imageDescription || 'error'}
              hero
              imageSizes="50vw"
            />
          </MainSection>
        </div>

        <div className="col-span-2 pl-8">
          <MoreSectionDesktop label="News & Events">
            <div className="grid grid-rows-2 gap-8">
              <div className="w-full">
                <ArticleTeaserCardSmall
                  referenceId={sideStories?.[0]?.referenceId || 'error'}
                  title={sideStories?.[0]?.title || 'error'}
                  description={sideStories?.[0]?.description || 'error'}
                  imageUrl={sideStories?.[0]?.imageUrl || 'error'}
                  imageDescription={
                    sideStories?.[0]?.imageDescription || 'error'
                  }
                  hero
                  imageSizes="33vw"
                />
              </div>

              <div className="w-full">
                <ArticleTeaserCardSmall
                  referenceId={sideStories?.[1]?.referenceId || 'error'}
                  title={sideStories?.[1]?.title || 'error'}
                  description={sideStories?.[1]?.description || 'error'}
                  imageUrl={sideStories?.[1]?.imageUrl || 'error'}
                  imageDescription={
                    sideStories?.[1]?.imageDescription || 'error'
                  }
                  hero
                  imageSizes="33vw"
                />
              </div>
            </div>
          </MoreSectionDesktop>
        </div>
      </div>

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
                  imageSizes="25vw"
                />
              </div>
            )
          })}
        </div>
      </MoreSectionDesktop>

      <MoreSectionDesktop label="Fast Bites">
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
                  imageSizes="25vw"
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
                  imageSizes="25vw"
                />
              </div>
            )
          })}
        </div>
      </MoreSectionDesktop>

      <MoreSectionDesktop label="Sartorial Standouts">
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
                  imageSizes="25vw"
                />
              </div>
            )
          })}
        </div>
      </MoreSectionDesktop>

      <MoreSectionDesktop label="Local Favorites">
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
                  imageSizes="25vw"
                />
              </div>
            )
          })}
        </div>
      </MoreSectionDesktop>
    </div>
  )
}
