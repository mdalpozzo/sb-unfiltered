import { fetchArticleData } from '@/contentQueries/fetchArticleData'

interface ArticleProps {
  params: {
    'reference-id': string
  }
}

export default async function Article({ params }: ArticleProps) {
  const data = await fetchArticleData({
    articleReferenceId: params['reference-id'],
  })
  return <article>Article Title: {params['reference-id']}</article>
}
