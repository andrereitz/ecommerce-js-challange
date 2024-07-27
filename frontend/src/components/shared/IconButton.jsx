export const IconButton = ({ children, onClick, outline = false, size = 40 }) => {
  return (
    <button 
      className={`flex justify-center items-center rounded-xl w-[${size}px] h-[${size}px] basis-[${size}px] shrink-0 grow-0 ${outline ? 'border border-orange text-orange' : 'bg-white'}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}