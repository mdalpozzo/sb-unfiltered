import { HomePageDesktop } from '@/components/HomePage/HomePageDesktop'
import { HomePageMobile } from '@/components/HomePage/HomePageMobile'
import { fetchFrontPageStories } from '@/contentQueries/fetchFrontPageStories'
import { cn } from '@/utils/cn'

export default async function Home() {
  const response = await fetchFrontPageStories()
  const { mainStory, sideStories, allStories } = response

  return (
    <main className={cn('w-full min-h-screen', 'base-padding-x', 'pt-10')}>
      <div className="hidden sm:flex">
        <HomePageDesktop
          mainStory={mainStory}
          sideStories={sideStories}
          allStories={allStories}
        />
      </div>

      <div className="flex sm:hidden">
        <HomePageMobile
          mainStory={mainStory}
          sideStories={sideStories}
          allStories={allStories}
        />
      </div>
    </main>
  )
}
