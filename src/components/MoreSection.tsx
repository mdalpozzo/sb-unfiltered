import { SectionLabel } from './SectionLabel'

interface MoreSectionDesktopProps {
  children: React.ReactNode
  label: string
}

export const MoreSectionDesktop = ({
  children,
  label,
}: MoreSectionDesktopProps) => {
  return (
    <div className="border-t-2 border-light-text dark:border-dark-text">
      <SectionLabel label={label} />
      {children}
    </div>
  )
}
