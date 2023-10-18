'use client'

import { useEffect, useRef, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/utils/cn'

export function NavMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const bodyDivRef = useRef<HTMLDivElement>(null)

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
    <div className="z-30">
      {mobileMenuOpen ? (
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-light-text dark:text-dark-text"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="sr-only">Close main menu</span>
          <XMarkIcon className="h-10 w-10" aria-hidden="true" />
        </button>
      ) : (
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-light-text dark:text-dark-text"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-10 w-10" aria-hidden="true" />
        </button>
      )}

      <div
        ref={bodyDivRef}
        // todo animate slide in transition
        className={cn(
          'fixed bg-black bg-opacity-50 top-navbar right-0 left-0 bottom-0 w-screen h-screen justify-end',
          mobileMenuOpen ? 'flex' : 'hidden'
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className="relative bg-light-bg dark:bg-dark-bg p-6 overflow-y-auto h-full w-1/2"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div className="mt-6 flow-root">
            <div className="space-y-2 py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Events
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Food
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Nightlife
              </a>

              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Beaches
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
