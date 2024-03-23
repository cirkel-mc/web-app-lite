import * as React from 'react'

function SvgClock(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={17}
      fill="none"
      {...props}
    >
      <g clipPath="url(#Clock_svg__a)">
        <path
          fill="#717171"
          d="M8 .583a8 8 0 1 0 0 16 8 8 0 0 0 0-16m.75 3.75v4.25c0 .25-.125.485-.334.625l-3 2A.75.75 0 0 1 4.375 11a.75.75 0 0 1 .21-1.04L7.25 8.182v-3.85c0-.415.334-.75.75-.75s.75.335.75.75"
        />
      </g>
      <defs>
        <clipPath id="Clock_svg__a">
          <path fill="#fff" d="M16 .583H0v15.833h16z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default SvgClock
