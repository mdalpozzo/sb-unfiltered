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
  if (imageUrl === 'error') {
    return <p>error</p>
  }

  return (
    <div>
      <div className="w-full aspect-video relative">
        <Image
          className="object-cover object-center aspect-video"
          fill
          src={imageUrl}
          alt={imageDescription}
        />
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-sm">{imageDescription}</p>
        <p className="text-2xl">{title}</p>
      </div>
    </div>
  )
}
