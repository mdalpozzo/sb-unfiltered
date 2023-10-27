import { HomePageDesktop } from '@/components/HomePage/HomePageDesktop'
import { HomePageMobile } from '@/components/HomePage/HomePageMobile'
import { fetchFrontPageStories } from '@/contentQueries/fetchFrontPageStories'

export default async function Home() {
  const response = await fetchFrontPageStories()
  // console.log('response: ', JSON.stringify(response, null, 2))
  const { mainStory, sideStories, allStories } = response

  return (
    <main className="w-full min-h-screen">
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
