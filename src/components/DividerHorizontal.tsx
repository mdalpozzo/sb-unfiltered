import { cn } from '@/utils/cn'

interface DividerHorizontalProps {
  className?: string
}

export const DividerHorizontal = ({ className }: DividerHorizontalProps) => {
  return (
    <div
      className={cn([
        'h-[1px] w-full bg-light-line dark:bg-dark-line',
        className,
      ])}
    />
  )
}
