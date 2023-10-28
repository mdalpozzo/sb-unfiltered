// import './globals.css'
// import type { Metadata } from 'next'
import './article.css'
import { Didact_Gothic } from 'next/font/google'
import { cn } from '@/utils/cn'

const didactGothic = Didact_Gothic({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

// export const metadata: Metadata = {
//   title: 'SB Unfiltered',
//   description: 'Santa Barbara living guide',
// }

export default function RootLayout({
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
      <div className="mx-20 mt-20 pb-20">
        {/* // could be an ad slot component here */}
        {/* <NavBar initialTheme={theme} /> */}
        {children}
      </div>
    </div>
  )
}
