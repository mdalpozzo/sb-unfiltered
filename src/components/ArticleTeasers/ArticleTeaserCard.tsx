import { ArticleClickableWrapper } from './ArticleClickableWrapper'
import { cn } from '@/utils/cn'
import { CustomImage } from '../CustomImage'

export interface ArticleTeaserCardProps {
  referenceId: string
  title: string
  description: string
  imageUrl: string
  imageDescription: string
  hero?: boolean
}

export const ArticleTeaserCard = ({
  referenceId,
  title,
  description,
  imageUrl,
  imageDescription,
  hero,
}: ArticleTeaserCardProps) => {
  if (imageUrl === 'error') {
    return <p>error</p>
  }

  return (
    <ArticleClickableWrapper referenceId={referenceId}>
      <div className="relative w-full">
        <div className="w-full aspect-video relative">
          <CustomImage
            className={cn(['object-cover object-center aspect-video'])}
            fill
            src={imageUrl}
            alt={imageDescription}
            priority={hero}
          />
        </div>

        <div className="flex flex-col space-y-2 sm:space-y-4">
          <p className="text-sm desktop">{imageDescription}</p>
          <p className="text-3xl font-bold sm:text-4xl hover:underline">
            {title}
          </p>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </ArticleClickableWrapper>
  )
}
