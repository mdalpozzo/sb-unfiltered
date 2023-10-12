import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '@/constants'

interface Article {
  title: string
  subtitle: string
  body: string
  imageUrls: string[]
  referenceId: string
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
}: FetchArticleDataArgs): Promise<Article> => {
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

  console.log('data: ', JSON.stringify(data, null, 2))

  return data
}
