import { CustomImage } from '@/components/CustomImage'
import { DividerHorizontal } from '@/components/DividerHorizontal'
import { fetchArticleData } from '@/contentQueries/fetchArticleData'

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
    <article className="w-full px-20">
      <div className="w-full flex md:hidden flex-col items-center mb-14">
        <p className="text-3xl sm:text-5xl font-extrabold mb-6">
          {article?.title}
        </p>
        <p className="text-2xl sm:font-bold">{article?.subtitle}</p>
      </div>

      <DividerHorizontal className="mb-5" />

      <div className="flex flex-col md:flex-row justify-center items-center p-8 gap-8">
        {!!heroImage && (
          <div className="w-full flex flex-col items-center">
            <div className="w-screen story-hero-image-margin-x sm:w-full aspect-video relative">
              <CustomImage
                className="object-cover object-center"
                alt={heroImage.title}
                fill
                src={heroImage.url}
                priority
              />
            </div>
            <p className="text-sm md:hidden">{heroImage.description}</p>
          </div>
        )}

        <div className="w-full hidden md:flex flex-col items-center">
          <p className="text-3xl sm:text-5xl font-extrabold mb-6">
            {article?.title}
          </p>
          <p className="text-2xl sm:font-bold">{article?.subtitle}</p>
        </div>
      </div>

      <DividerHorizontal className="mt-5 mb-10 hidden md:block" />

      <div
        className="article-body w-full max-w-full font-serif text-lg flex-wrap break-word overflow-hidden"
        dangerouslySetInnerHTML={{
          __html: article?.bodyHtml || '',
        }}
      />
    </article>
  )
}
