import React from 'react'
import { HourFill } from '@/views/common/components/Icons'

interface HourProps {
  hour: string
}

const Hour = ({ hour }: HourProps) => {
  return (
    <div className="flex gap-1 justify-between items-center">
      <HourFill />
      <span>{hour}</span>
    </div>
  )
}

export default Hour
