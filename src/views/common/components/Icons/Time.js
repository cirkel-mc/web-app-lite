import * as React from 'react'
const SvgTime = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#Time_svg__a)">
      <path
        fill="#717171"
        d="M9.5 0a8 8 0 1 1 0 16 8 8 0 0 1 0-16m-.75 3.75V8c0 .25.125.484.334.625l3 2a.75.75 0 0 0 1.041-.21.75.75 0 0 0-.21-1.04L10.25 7.6V3.75A.75.75 0 0 0 9.5 3a.75.75 0 0 0-.75.75"
      />
    </g>
    <defs>
      <clipPath id="Time_svg__a">
        <path fill="#fff" d="M.5 0h18v15.833H.5z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgTime
