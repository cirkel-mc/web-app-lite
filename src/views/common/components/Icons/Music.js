import * as React from 'react'
const SvgMusic = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#Music_svg__a)">
      <path
        fill="#717171"
        d="M17.097.197c.253.187.403.487.403.803v10.5c0 1.381-1.344 2.5-3 2.5s-3-1.119-3-2.5 1.344-2.5 3-2.5c.35 0 .688.05 1 .144v-4.55l-8 2.4V13.5c0 1.381-1.344 2.5-3 2.5s-3-1.119-3-2.5 1.344-2.5 3-2.5c.35 0 .688.05 1 .144V4c0-.44.29-.831.713-.96l10-3a1 1 0 0 1 .884.157"
      />
    </g>
    <defs>
      <clipPath id="Music_svg__a">
        <path fill="#fff" d="M.5 0h18v15.833H.5z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgMusic
