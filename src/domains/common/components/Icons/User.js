import * as React from 'react'

function SvgUser(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={16}
      fill="none"
      {...props}
    >
      <g clipPath="url(#User_svg__a)">
        <path
          fill="#717171"
          d="M9.5 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8.072 9.5A5.57 5.57 0 0 0 2.5 15.072c0 .512.416.928.928.928h12.144a.93.93 0 0 0 .928-.928A5.57 5.57 0 0 0 10.928 9.5z"
        />
      </g>
      <defs>
        <clipPath id="User_svg__a">
          <path fill="#fff" d="M.5 0h18v15.833H.5z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default SvgUser
