'use client'

import { useEffect, useRef, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/utils/cn'
import { DarkModeToggle } from './DarkModeToggle'

interface NavMenuProps {
  onToggle: (open: boolean) => void
  isMobile: boolean
}

export function NavMenu({ onToggle, isMobile }: NavMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const bodyDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    onToggle(mobileMenuOpen)
  }, [mobileMenuOpen, onToggle])

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (mobileMenuOpen && !bodyDivRef.current?.contains(e.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleDocumentClick)

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick)
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    // Prevent scrolling when the mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  return (
    <div className="z-30 h-full aspect-square">
      <div
        ref={bodyDivRef}
        // todo animate slide in transition
        className={cn(
          'fixed bg-opacity-50 right-0 left-0 top-0 w-screen justify-end',
          isMobile ? 'bottom-navbar' : 'top-navbar',
          mobileMenuOpen ? 'flex' : 'hidden'
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className="relative bg-navmenu-bg-light dark:bg-navmenu-bg-dark p-6 overflow-y-auto h-full w-full flex flex-col justify-end"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          {/* <div className="mt-6 flow-root mx-10d">
            <div className="space-y-2 py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-gray-50"
              >
                Events
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-gray-50"
              >
                Food
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-gray-50"
              >
                Nightlife
              </a>

              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-gray-50"
              >
                Beaches
              </a>
            </div>
          </div> */}

          <DarkModeToggle />
        </div>
      </div>

      {mobileMenuOpen ? (
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-light-text dark:text-dark-text"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="sr-only">Close main menu</span>
          <div className="aspect-w-1 aspect-h-1 h-full">
            <XMarkIcon
              className="h-full w-full object-contain"
              aria-hidden="true"
            />
          </div>
        </button>
      ) : (
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-light-text dark:text-dark-text"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="aspect-w-1 aspect-h-1 h-full">
            <Bars3Icon
              className="h-full w-full object-contain"
              aria-hidden="true"
            />
          </div>
        </button>
      )}
    </div>
  )
}
