import * as React from 'react'

function SvgCart(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 -960 960 960"
      {...props}
    >
      <path d="M280-80q-33 0-56.5-23.5T200-160t23.5-56.5T280-240t56.5 23.5T360-160t-23.5 56.5T280-80m400 0q-33 0-56.5-23.5T600-160t23.5-56.5T680-240t56.5 23.5T760-160t-23.5 56.5T680-80M246-720l96 200h280l110-200zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130zm134 280h280z" />
    </svg>
  )
}
export default SvgCart
