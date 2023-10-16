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
        // dark
        `dark:bg-dark-bg dark:text-dark-text`,
        // padding
        'pt-base-padding-top base-padding-x',
      ])}
    >
      {/* // could be an ad slot component here */}
      {/* <NavBar initialTheme={theme} /> */}
      {children}
    </div>
  )
}
