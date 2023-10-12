import Link from 'next/link'

interface ArticleClickableWrapperProps {
  children: React.ReactNode
  title: string
}

export function ArticleClickableWrapper({
  children,
  title,
}: ArticleClickableWrapperProps) {
  return (
    <Link className="cursor-pointer" href={`/article/${title}`}>
      {children}
    </Link>
  )
}
