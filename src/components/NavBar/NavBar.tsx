// import Image from 'next/image'
import Link from 'next/link'
import { DarkModeToggle } from './DarkModeToggle'
import { LogoSVG } from '@/components/LogoSVG'
import { cn } from '@/utils/cn'
import { NavMenu } from './NavMenu'

interface NavBarProps {
  initialTheme?: string
}

export function NavBar({ initialTheme }: NavBarProps) {
  return (
    <header
      className={cn([
        'h-navbar',
        `bg-inherit fixed top-0 left-0 right-0 border-b border-solid border-light-lin`,
        // dark mode
        `dark:border-dark-line dark:bg-zinc-900`,
        // shadow
        'shadow dark:shadow-zinc-600',
        'z-40',
      ])}
    >
      <nav
        className="relative h-full w-full flex items-center justify-center p-1 lg:px-8"
        aria-label="Global"
      >
        <Link
          href="/"
          aria-label="Santa Barbara Unfiltered"
          className="flex justify-center"
        >
          <div className="relative flex justify-center items-center">
            <LogoSVG
              className={cn(`fill-dark-bg dark:fill-light-bg`)}
              width="100%"
              // TODO - height value acts strangely...
              // height="auto"
            />
          </div>
        </Link>

        <div className="absolute right-4">
          <div className="desktop">
            <DarkModeToggle initialTheme={initialTheme} />
          </div>
        </div>

        <div className="absolute right-1">
          <div className="mobile">
            <NavMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}
