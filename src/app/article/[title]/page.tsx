interface ArticleProps {
  params: {
    title: string
  }
}

export default function Article({ params }: ArticleProps) {
  console.log('params: ', params)
  return <article>Article Title: {params.title}</article>
}
