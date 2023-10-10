import { ArticleTeaserCard } from '@/components/ArticleTeaserCard'
import { ArticleTeaserCardSmall } from '@/components/ArticleTeaserCardSmall'
import { ArticleTeaserCardXSmall } from '@/components/ArticleTeaserCardXSmall'
import { Section } from '@/components/Section'
import { LINE_COLORS_DARK, LINE_COLORS_LIGHT } from '@/constants'
import { MockArticle } from '@/mocks/MockArticle'

export default function Home() {
  return (
    <main className="w-full min-h-screen p-24">
      <div
        className={`grid grid-cols-6 divide-x divide-${LINE_COLORS_LIGHT} dark:divide-${LINE_COLORS_DARK} divide-solid mb-24`}
      >
        <div className="col-span-4 px-4">
          <ArticleTeaserCard
            title={MockArticle.title}
            description={MockArticle.description}
            imageUrl={MockArticle.imageUrl}
            imageDescription={MockArticle.imageDescription}
          />
        </div>

        <div className="grid grid-rows-2 gap-8 col-span-2 px-4">
          <div className="w-full">
            <ArticleTeaserCardSmall
              title={MockArticle.title}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>

          <div className="w-full">
            <ArticleTeaserCardSmall
              title={MockArticle.title}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>
        </div>
      </div>

      <Section label="Can't Miss!">
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
