import { NavBar } from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Didact_Gothic } from 'next/font/google'

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
  return (
    <html lang="en">
      <body
        className={`${didactGothic.className} bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  )
}
