import { MockArticle } from '@/mocks/MockArticle'
import { ArticleTeaserCard, ArticleTeaserCardProps } from '../ArticleTeaserCard'
import {
  ArticleTeaserCardPropsSmall,
  ArticleTeaserCardSmall,
} from '../ArticleTeaserCardSmall'
import { ArticleTeaserCardXSmall } from '../ArticleTeaserCardXSmall'
import { MoreSectionDesktop } from '../MoreSection'

interface HomePageDesktopProps {
  mainStory?: ArticleTeaserCardProps
  sideStories?: ArticleTeaserCardPropsSmall[]
}

export const HomePageDesktop = ({
  mainStory,
  sideStories,
}: HomePageDesktopProps) => {
  return (
    <div>
      <div
        className={`grid grid-cols-6 divide-x divide-solid divide-light-line dark:divide-dark-line mb-24`}
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

      <MoreSectionDesktop label="Hidden Gems">
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
      </MoreSectionDesktop>

      <MoreSectionDesktop label="Good Eats">
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
      </MoreSectionDesktop>

      <MoreSectionDesktop label="Selfie Worthy">
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
      </MoreSectionDesktop>
    </div>
  )
}
