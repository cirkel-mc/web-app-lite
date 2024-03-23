import * as React from 'react'

function SvgPersonFill(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={17}
      fill="none"
      {...props}
    >
      <g clipPath="url(#PersonFill_svg__a)">
        <path
          fill="#C000EF"
          d="M3.5 2.083a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m1.25 9.5v4a.999.999 0 1 1-2 0V8.611L1.856 10.1a1 1 0 0 1-1.372.34 1 1 0 0 1-.34-1.371l1.822-3.032A3 3 0 0 1 4.537 4.58h.929c1.053 0 2.028.553 2.571 1.456L9.86 9.068a1 1 0 0 1-.34 1.372 1 1 0 0 1-1.372-.341L7.25 8.611v6.972a.999.999 0 1 1-2 0v-4z"
        />
        <path
          fill="#fff"
          fillOpacity={0.5}
          d="M3.5 2.083a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m1.25 9.5v4a.999.999 0 1 1-2 0V8.611L1.856 10.1a1 1 0 0 1-1.372.34 1 1 0 0 1-.34-1.371l1.822-3.032A3 3 0 0 1 4.537 4.58h.929c1.053 0 2.028.553 2.571 1.456L9.86 9.068a1 1 0 0 1-.34 1.372 1 1 0 0 1-1.372-.341L7.25 8.611v6.972a.999.999 0 1 1-2 0v-4z"
        />
      </g>
      <defs>
        <clipPath id="PersonFill_svg__a">
          <path fill="#fff" d="M0 .583h10v15.833H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default SvgPersonFill
