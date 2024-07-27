export const IconButton = ({ children, onClick, outline = false, size = 40 }) => {
  return (
    <button 
      className={
        `flex justify-center items-center rounded-xl w-[${size}px] h-[${size}px] ${outline ? 'border border-orange text-orange' : 'bg-white'}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}