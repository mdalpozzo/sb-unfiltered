import { LINE_COLORS_DARK, LINE_COLORS_LIGHT } from '@/constants'
import Image from 'next/image'

export function NavBar() {
  return (
    <header
      className={`bg-inherit fixed top-0 left-0 right-0 z-50 border-b border-solid border-${LINE_COLORS_LIGHT} dark:border-${LINE_COLORS_DARK}`}
    >
      <nav
        className="flex items-center justify-center p-1 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="/">
            <span className="sr-only">Santa Barbara Unfiltered</span>
            <div className="relative">
              <Image
                // height seems to do nothing..
                height={100}
                width={250}
                src="/sb-unfiltered.svg"
                alt="Marlin Logo"
                priority
              />
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}
