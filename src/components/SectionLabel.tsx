interface SectionLabelProps {
  label: string
}

export const SectionLabel = ({ label }: SectionLabelProps) => {
  return (
    <div className="inline-block font-bold tracking-wide bg-light-accent dark:bg-dark-accent text-light-accent-text dark:text-dark-accent-text px-5 py-1 mb-5">
      <p className="inline">{label}</p>
    </div>
  )
}
