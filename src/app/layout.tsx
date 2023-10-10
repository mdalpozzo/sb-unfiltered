import { NavBar } from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
        className={`${inter.className} bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  )
}
