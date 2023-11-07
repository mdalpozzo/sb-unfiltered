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
import { usePathname } from 'next/navigation'

const MOBILE_BREAKPOINT = 640

const SCROLL_THRESHOLD_DESKTOP = 100
const SCROLL_THRESHOLD_MOBILE = 100

interface NavBarProps {
  initialTheme?: string
}

export function NavBar({ initialTheme }: NavBarProps) {
  const [isMobile, setIsMobile] = useState(
    window ? window.innerWidth < MOBILE_BREAKPOINT : false
  )
  const [navbarHidden, setNavbarHidden] = useState(false)
  // const [logoOpacity, setLogoOpacity] = useState(1)
  const [logoHidden, setLogoHidden] = useState(true)
  const [navMenuOpen, setNavMenuOpen] = useState(false)

  const path = usePathname()

  // create an event listener
  useEffect(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    //choose the screen size
    const handleResize = () => {
      // breakpoint from tailwind config "sm"
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // TODO figure out scroll positions for mobile
  useEffect(() => {
    // NAVBAR =================
    let prevScrollPos = window.scrollY
    let prevPath = window.location.pathname
    let navbarHiddenHistory = { [prevPath]: false }

    const handleNavbarVisibility = throttle(() => {
      const currentPath = window.location.pathname
      const currentScrollPos = window.scrollY

      const scrollDiff = currentScrollPos - prevScrollPos

      if (navMenuOpen) {
        // if nav menu is open, show navbar
        const hidden = false
        setNavbarHidden(hidden)
        navbarHiddenHistory[currentPath] = hidden
      } else if (currentScrollPos === 0) {
        // if at top of page, show navbar
        const hidden = false
        setNavbarHidden(hidden)
        navbarHiddenHistory[currentPath] = hidden
      } else if (currentPath !== prevPath) {
        // if page changed, try to use the last navbar state for new page
        const hidden = !!navbarHiddenHistory[currentPath]
        setNavbarHidden(hidden)
        navbarHiddenHistory[currentPath] = hidden
      } else if (
        Math.abs(scrollDiff) >
        (isMobile ? SCROLL_THRESHOLD_MOBILE : SCROLL_THRESHOLD_DESKTOP)
      ) {
        // only trigger if at least 200 px scrolled
        const hidden = !(scrollDiff < 0)
        setNavbarHidden(hidden)
        navbarHiddenHistory[currentPath] = hidden
      }

      // update prev values
      prevScrollPos = currentScrollPos
      prevPath = currentPath
    }, 100)

    const handleLogoVisibility = throttle(() => {
      const shouldHideLogo = window.scrollY < 100
      if (window.location.pathname === '/') {
        setLogoHidden((prevLogoHidden) => {
          if (prevLogoHidden !== shouldHideLogo) {
            return shouldHideLogo
          }
          return prevLogoHidden
        })
      } else {
        setLogoHidden(false)
      }
    }, 100)

    window.addEventListener('scroll', handleNavbarVisibility, { passive: true })
    window.addEventListener('scroll', handleLogoVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleNavbarVisibility)
      window.removeEventListener('scroll', handleLogoVisibility)
    }
  }, [navMenuOpen, setNavbarHidden])

  useEffect(() => {
    // logo is only hidden on home page
    setLogoHidden(path === '/' && window.scrollY < 100)
  }, [path])

  return (
    <header
      className={cn([
        'h-navbar',
        'pt-1',
        'fixed left-0 right-0',
        isMobile ? 'bottom-0' : 'top-0',
        //border
        // 'border-solid border-b-[1px] border-light-line dark:border-dark-line',
        //background
        // 'bg-inherit',
        'bg-nav-bg-light dark:bg-nav-bg-dark',
        // shadow
        // 'shadow dark:shadow-zinc-600',
        // stacking
        'z-30',

        // auto hide ======= START
        'transition-all ease-in-out duration-500',
        navbarHidden ? 'opacity-0' : 'opacity-100',
        navbarHidden
          ? `${isMobile ? 'translate-y-navbar' : '-translate-y-navbar'}`
          : '',
        // auto hide ======= END
      ])}
    >
      {isMobile && (
        <div className={cn(['absolute', 'w-full', ' bottom-navbar z-20'])}>
          <NavBanner />
        </div>
      )}
      {!isMobile && (
        <div className={cn(['absolute', 'w-full', ' top-navbar z-20'])}>
          <NavBanner />
        </div>
      )}

      <nav
        className={cn(
          'relative h-full w-full flex items-center justify-center lg:px-8 '
        )}
        aria-label="Global"
      >
        <Link
          href="/"
          aria-label="Santa Barbara Unfiltered"
          className="flex justify-center h-full"
        >
          <div className="relative flex justify-center items-center h-full">
            <LogoSVG
              className={cn(
                `fill-light-text dark:fill-dark-text h-full w-full`,
                'transition-opacity duration-[400ms] ease-in-out',
                logoHidden ? 'opacity-0' : 'opacity-100'
              )}
              // style={{ opacity: logoOpacity }}
            />
          </div>
        </Link>

        <div className="absolute right-4">
          <div className="desktop">
            <DarkModeToggle initialTheme={initialTheme} />
          </div>
        </div>

        <div className="absolute right-1 h-full">
          <div className="mobile h-full relative">
            <NavMenu
              isMobile={isMobile}
              onToggle={(open) => setNavMenuOpen(open)}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}
