import { DividerHorizontal } from '@/components/DividerHorizontal'
import { HomePageDesktop } from '@/components/HomePage/HomePageDesktop'
import { HomePageMobile } from '@/components/HomePage/HomePageMobile'
import { LogoSVG } from '@/components/LogoSVG'
import { fetchFrontPageStories } from '@/contentQueries/fetchFrontPageStories'
import { cn } from '@/utils/cn'

export default async function Home() {
  const response = await fetchFrontPageStories()
  const { mainStory, sideStories, allStories } = response

  return (
    <main
      className={cn('w-full min-h-screen', 'base-padding-x pt-2', 'flex flex-col justify-center items-center')}
    >
      <div className="relative flex justify-center items-center h-16">
        <LogoSVG
          className={cn(`fill-light-text dark:fill-dark-text h-full w-full`)}
        />
      </div>
      <DividerHorizontal className="mb-8 mt-4 w-32" />

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
