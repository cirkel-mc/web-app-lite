'use client'

import React, { useState } from 'react'
import { faMusic, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import ToggleItem from './ToggleItem/ToggleItem'

interface ToggleCategoryProps {
  containerClass: string
  onChange: (e: string) => void
}

function ToggleCategory({ onChange, containerClass }: ToggleCategoryProps) {
  const [selected, setSelected] = useState('Jamming Session')

  const handleChange = (category: string) => {
    setSelected(category)
    onChange(category)
  }

  return (
    <div className={containerClass}>
      <p className="mb-2">Select Event</p>
      <div className="flex gap-4">
        <ToggleItem
          icon={faMusic}
          label="Jamming Session"
          className="w-1/2"
          selected={selected}
          onClick={() => handleChange('Jamming Session')}
        />
        <ToggleItem
          icon={faCalendarDays}
          label="Event"
          className="w-1/2"
          selected={selected}
          onClick={() => handleChange('Event')}
        />
      </div>
    </div>
  )
}

export default ToggleCategory
