import { NavBar } from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Didact_Gothic } from 'next/font/google'
import { Providers } from '@/components/Providers'
import {
  DARK_BG_COLOR,
  DARK_TEXT_COLOR,
  DEFAULT_THEME,
  LIGHT_BG_COLOR,
  LIGHT_TEXT_COLOR,
} from '@/constants'
import { getThemeCookie } from '@/theme/getThemeCookie'

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
        className={`${didactGothic.className} bg-${LIGHT_BG_COLOR} text-${LIGHT_TEXT_COLOR} dark:bg-${DARK_BG_COLOR} dark:text-${DARK_TEXT_COLOR}`}
      >
        <Providers>
          <NavBar initialTheme={theme} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
