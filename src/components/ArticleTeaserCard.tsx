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
        className="object-cover object-center aspect-video"
        // fill
        src={imageUrl}
        alt={imageDescription}
      />
      <div className="flex flex-col space-y-4">
        <p className="text-sm">{imageDescription}</p>
        <p className="text-2xl">{title}</p>
        <p className="text-base">{description}</p>
      </div>
    </div>
  )
}
