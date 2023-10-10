import Image, { StaticImageData } from 'next/image'

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
        <p className="text-xl">{title}</p>
      </div>
    </div>
  )
}
