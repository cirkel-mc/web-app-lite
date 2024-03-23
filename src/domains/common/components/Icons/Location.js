import * as React from 'react'

function SvgLocation(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={17}
      fill="none"
      {...props}
    >
      <g clipPath="url(#Location_svg__a)">
        <path
          fill="#717171"
          d="M9.74 16.183c1.604-2.006 5.26-6.868 5.26-9.6 0-3.312-2.687-6-6-6-3.312 0-6 2.688-6 6 0 2.732 3.656 7.594 5.26 9.6a.944.944 0 0 0 1.48 0M9 4.583a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
      </g>
      <defs>
        <clipPath id="Location_svg__a">
          <path fill="#fff" d="M0 .583h18v15.833H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default SvgLocation
