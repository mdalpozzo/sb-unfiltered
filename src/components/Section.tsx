import { SectionLabel } from './SectionLabel'

interface SectionProps {
  children: React.ReactNode
  label: string
}

export const Section = ({ children, label }: SectionProps) => {
  return (
    <div className="border-t-2 border-zinc-950">
      <SectionLabel label={label} />
      {children}
    </div>
  )
}
