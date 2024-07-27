export function BackArrow(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#323232" d="M5 11H20V12.5H5z" />
      <path
        d="M11 5.2l-7 6.5 7 6.5"
        stroke="#323232"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}