import React from 'react'
import { LocationFill } from '@/views/common/components/Icons'

interface StudioProps {
  studio: string
}

const Studio = ({ studio }: StudioProps) => {
  return (
    <div className="flex gap-1 justify-between items-center">
      <LocationFill />
      <span>{studio}</span>
    </div>
  )
}

export default Studio
