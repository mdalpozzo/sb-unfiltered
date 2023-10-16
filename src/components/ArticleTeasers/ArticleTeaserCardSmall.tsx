import Image from 'next/image'
import { ArticleClickableWrapper } from './ArticleClickableWrapper'

export interface ArticleTeaserCardPropsSmall {
  referenceId: string
  imageUrl: string
  imageDescription: string
  title: string
  hero?: boolean
}

export const ArticleTeaserCardSmall = ({
  title,
  imageUrl,
  imageDescription,
  referenceId,
  hero,
}: ArticleTeaserCardPropsSmall) => {
  if (imageUrl === 'error') {
    return <p>error</p>
  }

  return (
    <ArticleClickableWrapper referenceId={referenceId}>
      <div className="relative w-full aspect-video">
        <Image
          className="object-cover object-center aspect-video"
          fill
          src={imageUrl}
          alt={imageDescription}
          priority={hero}
        />
      </div>

      <div className="flex flex-col space-y-2">
        <p className="text-sm desktop">{imageDescription}</p>
        <p className="text-2xl hover:underline">{title}</p>
      </div>
    </ArticleClickableWrapper>
  )
}
