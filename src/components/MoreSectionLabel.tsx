interface MoreSectionLabelProps {
  label: string
}

export const MoreSectionLabel = ({ label }: MoreSectionLabelProps) => {
  return (
    <div className="inline-block bg-zinc-950 text-zinc-50 px-6 py-1 mb-4">
      <p className="inline">{label}</p>
    </div>
  )
}
