import { ArticleTeaserCard } from '@/components/ArticleTeaserCard'
import { MockArticle } from '@/mocks/MockArticle'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full min-h-screen p-24">
      <div className="grid grid-cols-2 divide-x divide-slate-100 divide-solid">
        <div className="">
          <ArticleTeaserCard
            title={MockArticle.name}
            description={MockArticle.description}
            imageUrl={MockArticle.imageUrl}
            imageDescription={MockArticle.imageDescription}
          />
        </div>

        <div className="grid grid-rows-2">
          <div className="">
            <ArticleTeaserCard
              title={MockArticle.name}
              description={MockArticle.description}
              imageUrl={MockArticle.imageUrl}
              imageDescription={MockArticle.imageDescription}
            />
          </div>

          <div className="">
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
