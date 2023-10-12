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

export const metadata: Metadata = {
  title: 'SB Unfiltered',
  description: 'Santa Barbara living guide',
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
        ])}
      >
        <Providers>
          <NavBar initialTheme={theme} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
