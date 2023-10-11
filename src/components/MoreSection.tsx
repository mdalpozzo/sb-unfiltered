import { MoreSectionLabel } from './MoreSectionLabel'

interface MoreSectionDesktopProps {
  children: React.ReactNode
  label: string
}

export const MoreSectionDesktop = ({
  children,
  label,
}: MoreSectionDesktopProps) => {
  return (
    <div className="border-t-2 border-zinc-950">
      <MoreSectionLabel label={label} />
      {children}
    </div>
  )
}
