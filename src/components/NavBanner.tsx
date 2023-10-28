import { cn } from '@/utils/cn'
import Link from 'next/link'

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
  return (
    <div
      className={cn([
        'fixed',
        'theme-bg w-full top-navbar z-20',
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
