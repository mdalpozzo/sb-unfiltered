'use client'

import { cn } from '@/utils/cn'
import Image from 'next/image'
import { useState } from 'react'

interface CustomImageProps extends React.ComponentProps<typeof Image> {
  fadeIn?: boolean
}

export const CustomImage = ({ alt, ...props }: CustomImageProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={cn([
        'bg-zinc-100 dark:bg-zinc-950 w-full h-full',
        'relative',
        // { 'animate-pulse': !loaded },
      ])}
    >
      <Image
        alt={alt}
        className={cn([
          'transition-opacity duration-[800ms] ease-in-out',
          {
            'opacity-100': loaded,
            'opacity-0': !loaded,
          },
          props.className,
        ])}
        onLoad={() => setLoaded(true)}
        sizes="50vw"
        {...props}
      />
    </div>
  )
}
