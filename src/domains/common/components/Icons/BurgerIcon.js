import * as React from 'react'

function SvgBurgerIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 -960 960 960"
      {...props}
    >
      <path d="M120-240v-80h720v80zm0-200v-80h720v80zm0-200v-80h720v80z" />
    </svg>
  )
}
export default SvgBurgerIcon
