import { ArticleTeaserCardSmall } from '@/components/ArticleTeasers/ArticleTeaserCardSmall'
import { DividerHorizontal } from '@/components/DividerHorizontal'
import { fetchCategoryArticles } from '@/contentQueries/fetchCategoryArticles'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default async function CategoryPage({
  params: { category },
}: CategoryPageProps) {
  // todo fetch category data
  const articles = await fetchCategoryArticles({
    tags: [category],
  })

  return (
    <div className="padding-page-top">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-2xl md:text-5xl mb-8 text-center">
          {capitalizeFirstLetter(category)}
        </p>
        <DividerHorizontal className="mb-8 w-48" />
      </div>

      <div className="grid grid-cols-2 gap-8">
        {articles.map((a, index) => {
          return (
            <ArticleTeaserCardSmall
              key={a.title}
              referenceId={a.referenceId}
              title={a.title}
              description={a.description}
              imageUrl={a.imageUrl}
              imageDescription={a.imageDescription}
              hero={index < 2}
              imageSizes="100%"
            />
          )
        })}
      </div>
    </div>
  )
}
