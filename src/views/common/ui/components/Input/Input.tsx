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
    <div className="flex items-center text-base box-border border-[1px] shadow-input border-gray-200 rounded-[24px] px-4 py-1 hover:border-primary-20 hover:!text-primary-20">
      <input
        className="text-neutral-800 w-full focus:outline-none"
        {...props}
        onChange={handleChange}
        value={customValue}
      />
      {props.icon && (
        <FontAwesomeIcon
          icon={props.icon}
          className="w-4 h-4 text-neutral-500"
          onClick={props.iconClick}
        />
      )}
    </div>
  )
}

export default Input
