import { CustomImage } from '@/components/CustomImage'
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

  console.log('article?.bodyRichText: ', article?.bodyRichText)

  return (
    <article className="w-full">
      <div className="w-full flex flex-col items-center mb-14">
        <p className="text-3xl sm:text-5xl font-extrabold mb-6">
          {article?.title}
        </p>
        <p className="text-2xl sm:font-bold">{article?.subtitle}</p>
      </div>

      {!!heroImage && (
        <div className="w-full flex flex-col items-center mb-14">
          <div className="w-screen story-hero-image-margin-x sm:w-5/6 aspect-video relative">
            <CustomImage
              className="object-cover object-center"
              alt={heroImage.title}
              fill
              src={heroImage.url}
              priority
            />
          </div>
          <p className="text-sm">{heroImage.description}</p>
        </div>
      )}

      <div
        className="w-full max-w-full font-serif text-lg flex-wrap break-all overflow-hidden"
        dangerouslySetInnerHTML={{
          __html: article?.bodyRichText || '',
        }}
      />
    </article>
  )
}
