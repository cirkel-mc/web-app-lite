'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InputProps } from './types'

function Input(props: InputProps) {
  const { value, onChange: _onChange } = props
  const [customValue, setValue] = useState(value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) _onChange(e)
    setValue(e.target.value)
  }

  return (
    <div className="flex items-center text-base border-2 border-neutral-500 rounded-[24px] px-4 py-1">
      <input
        className="placeholder:font-medium placeholder:text-neutral-500 text-neutral-500 font-medium w-full focus:outline-none"
        {...props}
        onChange={handleChange}
        value={customValue}
      />
      {props.icon && (
        <FontAwesomeIcon
          icon={props.icon}
          className="w-4 h-4 text-neutral-500"
        />
      )}
    </div>
  )
}

export default Input
