import Image, { StaticImageData } from 'next/image'

export interface ArticleTeaserCardXSmallProps {
  // TODO - StaticImageData is only for dev. remove when remote images implemented
  imageUrl: string | StaticImageData
  imageDescription: string
  title: string
  description: string
}

export const ArticleTeaserCardXSmall = ({
  title,
  imageUrl,
  imageDescription,
  description,
}: ArticleTeaserCardXSmallProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <Image
        className="object-cover object-center"
        // fill
        src={imageUrl}
        alt={imageDescription}
      />
      <p className="text-base font-bold">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  )
}
