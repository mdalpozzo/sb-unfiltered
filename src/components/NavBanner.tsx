'use client'

import { cn } from '@/utils/cn'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const MOCK_CATEGORIES = [
  {
    name: 'Restaurants',
    path: '/restaurants',
  },
  {
    name: 'Beaches',
    path: '/restaurants',
  },
  {
    name: 'Wine',
    path: '/restaurants',
  },
  {
    name: 'Activities',
    path: '/restaurants',
  },
  {
    name: 'Nightlife',
    path: '/restaurants',
  },
]

export function NavBanner() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    const scrollDiff = currentScrollPos - prevScrollPos
    const scrollStart = currentScrollPos === 0
    const scrollDown = scrollDiff > 0

    if (!scrollStart && !scrollDown && Math.abs(scrollDiff) < 200) return

    if (scrollDiff <= 0) {
      setVisible(true)
    } else {
      setVisible(false)
    }

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div
      className={cn([
        'fixed',
        'theme-bg w-full top-navbar z-20',

        // auto hide ======= START
        'transition-all ease-in-out duration-500',
        visible ? 'opacity-100' : 'opacity-0',
        // 'transition-[height] ease-in-out duration-200',
        // visible ? 'h-16' : 'h-0',
        // 'transition-transform ease-in-out duration-200',
        visible ? 'translate-y-0' : '-translate-y-16',
        // auto hide ======= END

        'overflow-hidden',
        'flex items-center',
      ])}
    >
      <div
        className={cn([
          'px-4 py-2',
          'w-full flex flex-row md:justify-end gap-2 overflow-x-scroll',
        ])}
      >
        {MOCK_CATEGORIES.map((category) => {
          return (
            <Link
              href={''} // TODO: Add link
              key={category.name}
              // className="py-2 px-5 theme-bg-complimentary rounded-md"
              className="py-2 px-5"
            >
              <p className="text-zinc-600 hover:text-emerald-500 font-extrabold text-lg">
                {category.name}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
