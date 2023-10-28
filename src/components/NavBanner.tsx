import { cn } from '@/utils/cn'

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
    <div className="theme-bg w-full sticky pt-navbar top-0 z-20">
      <div
        className={cn(['px-4 py-2', 'w-full flex flex-row gap-2 justify-end'])}
      >
        {MOCK_CATEGORIES.map((category) => {
          return (
            <div
              key={category.name}
              className="py-2 px-5 bg-green-200 dark:bg-green-300 rounded-md"
            >
              <p className="text-zinc-600">{category.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
