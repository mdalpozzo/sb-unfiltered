import { NavBar } from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Didact_Gothic } from 'next/font/google'
import { Providers } from '@/components/Providers'
import { DEFAULT_THEME } from '@/constants'
import { getThemeCookie } from '@/theme/getThemeCookie'
import { cn } from '@/utils/cn'
import { NavBanner } from '@/components/NavBanner'
import { Footer } from '@/components/Footer/Footer'
import AppScripts from '@/components/AppScripts'

const didactGothic = Didact_Gothic({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

// TODO research the SEO here
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
    <html
      lang="en"
      className={cn([theme, 'theme-bg'])}
      style={{ colorScheme: theme }}
    >
      <AppScripts />

      <body
        className={cn([
          `${didactGothic.className} bg-light-bg text-light-text`,
          // dark
          'app-bg',
          'pt-navbanner',
        ])}
      >
        <Providers>
          <NavBar initialTheme={theme} />
          <NavBanner />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
