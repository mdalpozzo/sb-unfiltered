// import Image from 'next/image'
import Link from 'next/link'
import { DarkModeToggle } from './DarkModeToggle'
import { LogoSVG } from '@/images/logo/LogoSVG'
import { cn } from '@/utils/cn'

interface NavBarProps {
  initialTheme?: string
}

export function NavBar({ initialTheme }: NavBarProps) {
  return (
    <header
      className={cn([
        `bg-inherit fixed top-0 left-0 right-0 z-50 border-b border-solid border-light-line`,
        // dark mode
        `dark:border-dark-line dark:bg-zinc-900`,
        // shadow
        'shadow dark:shadow-zinc-600',
      ])}
    >
      <nav
        className="relative flex items-center justify-center p-1 lg:px-8"
        aria-label="Global"
      >
        <Link
          href="/"
          aria-label="Santa Barbara Unfiltered"
          className="flex justify-center flex-grow"
        >
          <div className="relative">
            <LogoSVG
              className={cn(`fill-dark-bg dark:fill-light-bg`)}
              width={250}
            />
          </div>
        </Link>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <DarkModeToggle initialTheme={initialTheme} />
        </div>
      </nav>
    </header>
  )
}
