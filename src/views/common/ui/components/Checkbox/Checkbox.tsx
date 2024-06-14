'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

interface CheckboxProps {
  onToggle: () => void
}

function Checkbox(props: CheckboxProps) {
  const { onToggle } = props
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
    onToggle()
  }

  return (
    <div
      role="checkbox"
      className="w-5 h-5 flex justify-center items-center rounded border-2 border-gray-500 hover:border-primary-10"
      aria-checked={active}
      onClick={handleClick}
    >
      {active && (
        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-gray-500" />
      )}
    </div>
  )
}

export default Checkbox
