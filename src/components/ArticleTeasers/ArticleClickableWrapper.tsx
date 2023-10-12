import Link from 'next/link'

interface ArticleClickableWrapperProps {
  children: React.ReactNode
  referenceId: string
}

export function ArticleClickableWrapper({
  children,
  referenceId,
}: ArticleClickableWrapperProps) {
  return (
    <Link className="cursor-pointer" href={`/article/${referenceId}`}>
      {children}
    </Link>
  )
}
