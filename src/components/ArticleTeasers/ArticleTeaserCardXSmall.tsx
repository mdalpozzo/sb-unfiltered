import { ArticleClickableWrapper } from './ArticleClickableWrapper'
import { CustomImage } from '../CustomImage'

export interface ArticleTeaserCardXSmallProps {
  referenceId: string
  imageUrl: string
  imageDescription: string
  title: string
  description: string
  imageSizes?: string
}

export const ArticleTeaserCardXSmall = ({
  title,
  imageUrl,
  imageDescription,
  description,
  referenceId,
  imageSizes,
}: ArticleTeaserCardXSmallProps) => {
  return (
    <ArticleClickableWrapper referenceId={referenceId}>
      <div className="w-full aspect-xs-teaser">
        <CustomImage
          className="object-cover object-center"
          fill
          sizes={imageSizes}
          src={imageUrl}
          alt={imageDescription}
        />
      </div>

      <div className="flex flex-col space-y-2">
        <p className="text-base font-bold hover:underline">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </ArticleClickableWrapper>
  )
}
