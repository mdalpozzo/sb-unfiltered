import { ArticleClickableWrapper } from './ArticleClickableWrapper'
import { CustomImage } from '../CustomImage'

export interface ArticleTeaserCardPropsSmall {
  referenceId: string
  imageUrl: string
  imageDescription: string
  title: string
  description: string
  hero?: boolean
  imageSizes?: string
}

export const ArticleTeaserCardSmall = ({
  title,
  description,
  imageUrl,
  imageDescription,
  referenceId,
  hero,
  imageSizes,
}: ArticleTeaserCardPropsSmall) => {
  if (imageUrl === 'error') {
    return <p>error</p>
  }

  return (
    <ArticleClickableWrapper referenceId={referenceId}>
      <div className="w-full aspect-video">
        <CustomImage
          className="object-cover object-center aspect-video"
          fill
          src={imageUrl}
          alt={imageDescription}
          priority={hero}
          sizes={imageSizes}
        />
      </div>

      <div className="flex flex-col space-y-2">
        {/* <p className="text-sm desktop">{imageDescription}</p> */}
        <p className="text-2xl md:text-3xl hover:underline">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </ArticleClickableWrapper>
  )
}
