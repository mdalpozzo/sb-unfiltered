import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '@/constants'
// import { remark } from 'remark'
// import html from 'remark-html'

interface Article {
  referenceId: string
  title: string
  subtitle: string
  bodyRichText: string
  images: {
    title: string
    description: string
    url: string
  }[]
}

export const articleByReferenceId = `
    query($referenceId: String!) {
        articleCollection( where: {referenceId: $referenceId} ) {
            items {
            referenceId
            title
            subtitle
            body
            heroImagesCollection {
                items {
                  title
                  description
                  url
                }
            }
            }
        }
    }
`

interface FetchArticleDataArgs {
  articleReferenceId: string
}

export const fetchArticleData = async ({
  articleReferenceId,
}: FetchArticleDataArgs): Promise<Article | undefined> => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CONTENTFUL_API_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: articleByReferenceId,
        variables: {
          referenceId: articleReferenceId,
        },
      }),
    }
  )

  const { data, errors } = await res.json()

  // TODO handle errors and validation

  if (errors) {
    console.log('errors: ', errors)
  }

  const foundArticle = data.articleCollection?.items?.[0]

  if (!foundArticle) {
    console.log('error - no article found: ', foundArticle)
  }

  console.log('foundArticle.body: ', typeof foundArticle.body)

  // Use remark to convert markdown into HTML string
  // const processedContent = await remark().use(html).process(foundArticle.body)

  // console.log('processedContent: ', processedContent)
  // const contentHtml = processedContent.toString()

  return {
    referenceId: foundArticle.referenceId,
    title: foundArticle.title,
    subtitle: foundArticle.subtitle,
    bodyRichText: foundArticle.body,
    images: foundArticle.heroImagesCollection.items.map((item: any) => {
      return {
        title: item.title || '',
        description: item.description || '',
        url: item.url || '',
      }
    }),
  }
}
