import { cn } from '@/utils/cn'
import { SectionLabel } from './SectionLabel'

interface MoreSectionDesktopProps {
  children: React.ReactNode
  label: string
  className?: string
}

export const MoreSectionDesktop = ({
  children,
  label,
  className,
}: MoreSectionDesktopProps) => {
  return (
    <div
      className={cn([
        'border-t-2 border-light-text dark:border-dark-text',
        className,
      ])}
    >
      <SectionLabel label={label} />
      {children}
    </div>
  )
}
