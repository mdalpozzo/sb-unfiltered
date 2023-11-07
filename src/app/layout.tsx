import { NavBar } from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'
import { DEFAULT_THEME } from '@/constants'
import { getThemeCookie } from '@/theme/getThemeCookie'
import { cn } from '@/utils/cn'
import { Footer } from '@/components/Footer/Footer'
import { GTMNoScript, GTMScript } from '@/components/GTMScripts'
import { didactGothic } from '@/styles/fonts'

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
    <html lang="en" className={cn([theme])} style={{ colorScheme: theme }}>
      <GTMScript />

      <body
        className={cn([
          `${didactGothic.className}`,
          // dark
          'app-bg',
          'h-full',
        ])}
      >
        <GTMNoScript />

        <Providers>
          <NavBar initialTheme={theme} />

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
