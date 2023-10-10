import Image, { StaticImageData } from 'next/image'

export interface ArticleTeaserCardProps {
  title: string
  description: string
  // TODO - StaticImageData is only for dev. remove when remote images implemented
  imageUrl: string | StaticImageData
  imageDescription: string
}

export const ArticleTeaserCard = ({
  title,
  description,
  imageUrl,
  imageDescription,
}: ArticleTeaserCardProps) => {
  return (
    <div>
      <Image
        className="object-cover object-center"
        // fill
        src={imageUrl}
        alt={imageDescription}
      />
      <p className="h-25">{imageDescription}</p>
      <p className="h-35">{title}</p>
      <p className="h-75">{description}</p>
    </div>
  )
}
