import Image from 'next/image'
import { ArticleClickableWrapper } from './ArticleClickableWrapper'

export interface ArticleTeaserCardXSmallProps {
  referenceId: string
  imageUrl: string
  imageDescription: string
  title: string
  description: string
}

export const ArticleTeaserCardXSmall = ({
  title,
  imageUrl,
  imageDescription,
  description,
  referenceId,
}: ArticleTeaserCardXSmallProps) => {
  return (
    <ArticleClickableWrapper referenceId={referenceId}>
      <div className="relative w-full aspect-xs-teaser">
        <Image
          className="object-cover object-center"
          fill
          src={imageUrl}
          alt={imageDescription}
        />
      </div>

      <div className="flex flex-col space-y-2">
        <p className="text-base font-bold">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </ArticleClickableWrapper>
  )
}
