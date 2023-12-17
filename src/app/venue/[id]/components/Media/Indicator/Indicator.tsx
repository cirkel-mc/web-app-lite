import React from 'react'
import type { FC } from 'react'

import clsx from 'clsx'

interface IndicatorProps {
  index: number;
  current: number;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Indicator: FC<IndicatorProps> = ({ index, current, onClick }) => {
  return (
    <div className={clsx('transition-all duration-200 ease-out h-3 rounded-full ', current === index ? 'bg-primary-700 w-7' : 'bg-white w-3')} data-index={index} onClick={onClick} />
  )
}

export default Indicator