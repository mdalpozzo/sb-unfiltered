'use client'

// import Image from 'next/image'
import Link from 'next/link'
import { DarkModeToggle } from './DarkModeToggle'
import { LogoSVG } from '@/components/LogoSVG'
import { cn } from '@/utils/cn'
import { NavMenu } from './NavMenu'
import { useAppStore } from '@/state/store'
import { useEffect } from 'react'
import { NavBanner } from '../NavBanner'
import { useShallow } from 'zustand/react/shallow'
import { throttle } from 'lodash'

interface NavBarProps {
  initialTheme?: string
}

export function NavBar({ initialTheme }: NavBarProps) {
  const { navbarVisible, setNavbarVisible } = useAppStore(
    useShallow((state) => ({
      navbarVisible: state.navbarVisible,
      setNavbarVisible: state.setNavbarVisible,
    }))
  )

  useEffect(() => {
    let prevScrollPos = window.scrollY

    // TODO figure out how to prevent triggering this on in app navigation
    const handleScroll = throttle(() => {
      const currentScrollPos = window.scrollY

      const scrollDiff = currentScrollPos - prevScrollPos
      const scrollStart = currentScrollPos === 0 && prevScrollPos !== 0
      // const scrollDown = scrollDiff > 0

      if (
        !scrollStart &&
        // !scrollDown &&
        Math.abs(scrollDiff) < 200
      )
        return

      if (scrollDiff <= 0) {
        setNavbarVisible(true)
      } else {
        setNavbarVisible(false)
      }

      prevScrollPos = currentScrollPos
    }, 100)

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [setNavbarVisible])

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
        navbarVisible ? 'opacity-100' : 'opacity-0',
        navbarVisible ? '' : '-translate-y-16',
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
