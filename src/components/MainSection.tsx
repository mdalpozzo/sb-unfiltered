import { SectionLabel } from './SectionLabel'

interface MainSectionProps {
  children: React.ReactNode
  label: string
}

export const MainSection = ({ children, label }: MainSectionProps) => {
  return (
    <div className="border-t-2 border-light-text dark:border-dark-text">
      <SectionLabel label={label} />
      {children}
    </div>
  )
}
