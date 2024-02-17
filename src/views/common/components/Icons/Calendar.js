import * as React from 'react'
const SvgCalendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <g clipPath="url(#Calendar_svg__a)">
      <path
        fill="#717171"
        d="M12 1.583v1h1.5a1.5 1.5 0 0 1 1.5 1.5v1.5H1v-1.5a1.5 1.5 0 0 1 1.5-1.5H4v-1a.999.999 0 1 1 2 0v1h4v-1a.999.999 0 1 1 2 0m-11 5h14v8.5a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5z"
      />
    </g>
    <defs>
      <clipPath id="Calendar_svg__a">
        <path fill="#fff" d="M16 .583H0v15.833h16z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCalendar
