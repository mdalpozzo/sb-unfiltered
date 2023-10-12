import Image, { StaticImageData } from 'next/image'
import { ArticleClickableWrapper } from './ArticleClickableWrapper'

export interface ArticleTeaserCardPropsSmall {
  // TODO - StaticImageData is only for dev. remove when remote images implemented
  imageUrl: string | StaticImageData
  imageDescription: string
  title: string
}

export const ArticleTeaserCardSmall = ({
  title,
  imageUrl,
  imageDescription,
}: ArticleTeaserCardPropsSmall) => {
  if (imageUrl === 'error') {
    return <p>error</p>
  }

  return (
    <ArticleClickableWrapper title={title}>
      <div className="w-full aspect-video relative">
        <Image
          className="object-cover object-center aspect-video"
          fill
          src={imageUrl}
          alt={imageDescription}
        />
      </div>

      <div className="flex flex-col space-y-2">
        <p className="text-sm desktop">{imageDescription}</p>
        <p className="text-2xl">{title}</p>
      </div>
    </ArticleClickableWrapper>
  )
}
