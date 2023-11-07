import './article.css'
import { cn } from '@/utils/cn'

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={cn([
        // `${didactGothic.className} bg-light-bg text-light-text`,
        // dark,
      ])}
    >
      <div className="mt-14 pb-20">
        {/* // could be an ad slot component here */}
        {/* <NavBar initialTheme={theme} /> */}
        {children}
      </div>
    </div>
  )
}
