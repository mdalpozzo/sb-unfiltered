import { ArticleTeaserCard } from '@/components/ArticleTeaserCard'
import { LINE_COLORS_DARK, LINE_COLORS_LIGHT } from '@/constants'
import { MockArticle } from '@/mocks/MockArticle'

export default function Home() {
  return (
    <main className="w-full min-h-screen p-24">
      <div
        className={`grid grid-cols-6 divide-x divide-${LINE_COLORS_LIGHT} dark:divide-${LINE_COLORS_DARK} divide-solid`}
      >
        <div className="col-span-4 px-4">
          <ArticleTeaserCard
            title={MockArticle.name}
            description={MockArticle.description}
            imageUrl={MockArticle.imageUrl}
            imageDescription={MockArticle.imageDescription}
          />
        </div>

        <div className="grid grid-rows-2 col-span-2 px-4">
          <div className="w-full">
            <ArticleTeaserCard
              title={MockArticle.name}
              description={MockArticle.description}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>

          <div className="w-full">
            <ArticleTeaserCard
              title={MockArticle.name}
              description={MockArticle.description}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4">
        <div>
          <ArticleTeaserCard
            title={MockArticle.name}
            description={MockArticle.description}
            imageUrl={MockArticle.imageUrl}
            imageDescription={MockArticle.imageDescription}
          />
        </div>
        <div>
          <ArticleTeaserCard
            title={MockArticle.name}
            description={MockArticle.description}
            imageUrl={MockArticle.imageUrl}
            imageDescription={MockArticle.imageDescription}
          />
        </div>
        <div>
          <ArticleTeaserCard
            title={MockArticle.name}
            description={MockArticle.description}
            imageUrl={MockArticle.imageUrl}
            imageDescription={MockArticle.imageDescription}
          />
        </div>
        <div>
          <ArticleTeaserCard
            title={MockArticle.name}
            description={MockArticle.description}
            imageUrl={MockArticle.imageUrl}
            imageDescription={MockArticle.imageDescription}
          />
        </div>
      </div>

      <div className="w-full bg-brown-100">
        <div>
          <ArticleTeaserCard
            title={MockArticle.name}
            description={MockArticle.description}
            imageUrl={MockArticle.imageUrl}
            imageDescription={MockArticle.imageDescription}
          />
        </div>
      </div>
    </main>
  )
}
