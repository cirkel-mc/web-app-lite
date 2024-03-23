import * as React from 'react'

function SvgEmail(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <path
        fill="#1C1C1E"
        fillRule="evenodd"
        d="M2.725 3.5c-.677 0-1.225.551-1.225 1.225v6.75c0 .678.552 1.225 1.225 1.225h10.55c.671 0 1.225-.545 1.225-1.225v-6.75c0-.672-.546-1.225-1.225-1.225zm4.55 5.078L3.124 4.45h9.75l-4.15 4.128c-.194.194-.451.3-.725.3s-.531-.106-.726-.3M2.45 11.082V5.119l3 2.983zm11.1 0-3-2.98 3-2.983zm-3.673-2.31 2.997 2.978H3.127l2.997-2.978.48.478c.373.373.87.579 1.397.579s1.024-.206 1.396-.578z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default SvgEmail
