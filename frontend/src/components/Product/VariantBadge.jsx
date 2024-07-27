export const VariantBadge = ({ title, onClick, isSelected }) => {
  return (
    <button 
      className={`rounded-full whitespace-nowrap border border-gray-xx-light py-1.5 px-4 text-sm text-gray-xx-light ${isSelected ? 'border-orange text-orange' : ''}`} 
      onClick={onClick}
    >
      {title}
    </button>
  )
}