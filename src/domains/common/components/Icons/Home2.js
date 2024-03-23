import * as React from 'react'

function SvgHome2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={16}
      fill="none"
      {...props}
    >
      <g clipPath="url(#Home2_svg__a)">
        <path
          fill="#717171"
          d="M18.494 7.984a1.01 1.01 0 0 1-1 1.004h-1l.022 5.006q-.001.126-.016.253v.503c0 .69-.56 1.25-1.25 1.25h-.5q-.052 0-.103-.003-.066.004-.131.003H12.75c-.69 0-1.25-.56-1.25-1.25V12c0-.553-.447-1-1-1h-2c-.553 0-1 .447-1 1v2.75c0 .69-.56 1.25-1.25 1.25H4.503q-.07 0-.14-.006A1 1 0 0 1 4.25 16h-.5c-.69 0-1.25-.56-1.25-1.25v-3.5q0-.044.003-.088V8.989H1.5c-.562 0-1-.438-1-1.004 0-.28.094-.53.313-.75L8.825.25c.219-.219.469-.25.688-.25s.468.063.656.219l7.981 7.015c.25.22.375.47.344.75"
        />
      </g>
      <defs>
        <clipPath id="Home2_svg__a">
          <path fill="#fff" d="M.5 0h18v15.833H.5z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default SvgHome2
