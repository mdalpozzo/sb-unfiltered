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
  if (imageUrl === 'error') {
    return <p>error</p>
  }

  return (
    <div className="relative w-full">
      <div className="w-full aspect-video relative">
        <Image
          className="object-cover object-center aspect-video"
          fill
          src={imageUrl}
          alt={imageDescription}
        />
      </div>
      <div className="flex flex-col space-y-2 sm:space-y-4">
        <p className="text-sm desktop">{imageDescription}</p>
        <p className="text-3xl font-bold sm:text-4xl">{title}</p>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  )
}
