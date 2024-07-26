export const VariantBadge = ({ title, onClick, isSelected }) => {
  return (
    <div className={`rounded-pill border border-red-400 p-3 ${isSelected ? 'bg-orange-500' : ''}`} onClick={onClick}>
      {title}
    </div>
  )
}