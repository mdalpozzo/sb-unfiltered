'use client'

// import Image from 'next/image'
import Link from 'next/link'
import { DarkModeToggle } from './DarkModeToggle'
import { LogoSVG } from '@/components/LogoSVG'
import { cn } from '@/utils/cn'
import { NavMenu } from './NavMenu'
import { useEffect, useState } from 'react'
import { NavBanner } from '../NavBanner'
import { throttle } from 'lodash'

interface NavBarProps {
  initialTheme?: string
}

export function NavBar({ initialTheme }: NavBarProps) {
  const [navbarHidden, setNavbarHidden] = useState(false)

  useEffect(() => {
    let prevScrollPos = window.scrollY
    let prevPath = window.location.pathname
    let navbarHiddenHistory = { [prevPath]: false }

    const handleScroll = throttle(() => {
      const currentPath = window.location.pathname
      const currentScrollPos = window.scrollY

      const scrollDiff = currentScrollPos - prevScrollPos

      if (currentScrollPos === 0) {
        // if at top of page, show navbar
        const hidden = false
        setNavbarHidden(hidden)
        navbarHiddenHistory[currentPath] = hidden
      } else if (currentPath !== prevPath) {
        // if page changed, try to use the last navbar state for new page
        const hidden = !!navbarHiddenHistory[currentPath]
        setNavbarHidden(hidden)
        navbarHiddenHistory[currentPath] = hidden
      } else if (Math.abs(scrollDiff) > 200) {
        // only trigger if at least 200 px scrolled
        const hidden = !(scrollDiff < 0)
        setNavbarHidden(hidden)
        navbarHiddenHistory[currentPath] = hidden
      }

      // update prev values
      prevScrollPos = currentScrollPos
      prevPath = currentPath
    }, 100)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setNavbarHidden])

  return (
    <header
      className={cn([
        'h-navbar',
        'bg-light-bg fixed top-0 left-0 right-0',
        //border
        'border-solid border-light-line',
        // dark mode
        `dark:border-dark-line dark:bg-zinc-900`,
        // shadow
        // 'shadow dark:shadow-zinc-600',
        'z-30',

        // auto hide ======= START
        'transition-all ease-in-out duration-500',
        navbarHidden ? 'opacity-0' : 'opacity-100',
        navbarHidden ? '-translate-y-navbar' : '',
        // auto hide ======= END
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

      <NavBanner />
    </header>
  )
}
