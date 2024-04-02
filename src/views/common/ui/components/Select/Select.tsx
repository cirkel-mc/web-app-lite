import React, { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { twMerge } from 'tailwind-merge'
import { useOutsideClick } from '@/views/hooks/useOutsideClick'

export type SelectItem = {
  label: string
  value: string
}

export interface SelectProps {
  icon?: IconDefinition
  options: SelectItem[]
  placeholder?: string
  iconPosition?: 'left' | 'right'
  value: string
  onChange: (e: any) => void
}

function Select(props: SelectProps) {
  const {
    options,
    icon,
    iconPosition = 'left',
    placeholder,
    value,
    onChange,
  } = props
  const selectRef = useOutsideClick(() => setIsOpen(false))

  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>('')
  const [customValue, setValue] = useState(value)

  const handleChange = (e: React.MouseEvent<HTMLParagraphElement>) => {
    setSelected(e?.currentTarget?.textContent)
    setIsOpen(false)
    const v = options.filter(
      (item) => item.label === e?.currentTarget?.textContent,
    )[0].value
    setValue(v)
    onChange(v)
  }

  return (
    <div className="relative" ref={selectRef}>
      <div
        className="flex flex-nowrap items-center justify-between rounded-full w-full  px-4 py-1 box-border border-[2px] border-[#717171] bg-white lg:h-8"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex justify-start gap-2 items-center">
          {icon && iconPosition === 'left' && (
            <FontAwesomeIcon icon={icon} className="text-gray-500 w-4 h-4" />
          )}
          <div className="flex items-center">
            <p className="text-[#717171] font-semibold">
              {customValue
                ? options.filter((item) => item.value === customValue)[0].label
                : placeholder}
            </p>
          </div>
        </div>

        {iconPosition === 'left' ? (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-gray-500 w-4 h-4"
          />
        ) : (
          icon &&
          iconPosition === 'right' && (
            <FontAwesomeIcon icon={icon} className="text-gray-500 w-4 h-4" />
          )
        )}
      </div>
      {isOpen && (
        <div className="z-50 w-full absolute top-[35px] bg-white flex flex-col gap-2 shadow-md border-[1px] border-neutral-40 mt-2 pt-2 rounded-lg max-h-[200px] overflow-auto">
          {options.map((item) => (
            <p
              key={item.value}
              className={twMerge(
                'hover:bg-secondary-10 px-4 py-2',
                item.value === value && 'bg-secondary-10',
              )}
              onClick={handleChange}
            >
              {item.label}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
