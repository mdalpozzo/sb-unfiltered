import { fetchArticleData } from '@/contentQueries/fetchArticleData'
import Image from 'next/image'

interface ArticleProps {
  params: {
    'reference-id': string
  }
}

export default async function Article({ params }: ArticleProps) {
  const article = await fetchArticleData({
    articleReferenceId: params['reference-id'],
  })

  const heroImage = article?.images?.[0]

  return (
    <article className="w-full">
      <div className="w-full flex flex-col items-center mb-14">
        <p className="text-5xl font-extrabold">{article?.title}</p>
        <p className="text-2xl font-bold">{article?.subtitle}</p>
      </div>

      {!!heroImage && (
        <div className="w-full flex flex-col items-center mb-14">
          <div className="w-1/2 aspect-video relative">
            <Image
              className="object-cover object-center"
              alt={heroImage.title}
              fill
              src={heroImage.url}
            />
          </div>
          <p className="text-sm">{heroImage.description}</p>
        </div>
      )}

      {/* <div
        dangerouslySetInnerHTML={{
          __html: article?.content || '',
        }} */}
    </article>
  )
}
