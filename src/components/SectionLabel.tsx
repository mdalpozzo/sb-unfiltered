interface SectionLabelProps {
  label: string
}

export const SectionLabel = ({ label }: SectionLabelProps) => {
  return (
    <div className="inline-block bg-dark-bg dark:bg-light-bg text-dark-text dark:text-light-text px-5 py-1 mb-5">
      <p className="inline">{label}</p>
    </div>
  )
}
