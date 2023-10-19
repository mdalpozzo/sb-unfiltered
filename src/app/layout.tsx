import { NavBar } from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Didact_Gothic } from 'next/font/google'
import { Providers } from '@/components/Providers'
import { DEFAULT_THEME } from '@/constants'
import { getThemeCookie } from '@/theme/getThemeCookie'
import { cn } from '@/utils/cn'

const didactGothic = Didact_Gothic({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

// TODO research what each of these properties means
export const metadata: Metadata = {
  title: 'Santa Barbara Unfiltered',
  description:
    'Santa Barbara guide and news for the best food, drinks, and lifestyle.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'Santa Barbara Unfiltered',
    description:
      'Santa Barbara guide and news for the best food, drinks, and lifestyle.',
    siteName: 'Santa Barbara Unfiltered',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = getThemeCookie() || DEFAULT_THEME

  return (
    <html lang="en" className={theme} style={{ colorScheme: theme }}>
      <body
        className={cn([
          `${didactGothic.className} bg-light-bg text-light-text`,
          // dark
          `dark:bg-dark-bg dark:text-dark-text`,
          // padding
          'base-padding-x pt-base-padding-top',
        ])}
      >
        <Providers>
          <NavBar initialTheme={theme} />
          {/* <div
            className={cn(
              // so this div handles scrolling instead of the body
              'h-screen overflow-auto overscroll-contain',
              // padding
              'base-padding-x pt-base-padding-top'
            )}
          > */}
          {children}
          {/* </div> */}
        </Providers>
      </body>
    </html>
  )
}
