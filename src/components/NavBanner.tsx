import { cn } from '@/utils/cn'
import Link from 'next/link'

const MOCK_CATEGORIES = [
  {
    name: 'Restaurants',
    path: '/category/restaurants',
  },
  {
    name: 'Beaches',
    path: '/category/beaches',
  },
  {
    name: 'Wine',
    path: '/category/wine',
  },
  {
    name: 'Activities',
    path: '/category/activities',
  },
  {
    name: 'Nightlife',
    path: '/category/nightlife',
  },
]

export function NavBanner() {
  return (
    <div
      className={cn([
        'bg-theme-primary',
        'overflow-hidden',
        'flex items-center',
        'w-full',
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
              href={category.path}
              key={category.name}
              // className="py-2 px-5 bg-theme-primary-complimentary rounded-md"
              className="py-2 px-5"
            >
              <p className="text-zinc-600 hover:text-theme-compliment font-extrabold text-lg">
                {category.name}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
