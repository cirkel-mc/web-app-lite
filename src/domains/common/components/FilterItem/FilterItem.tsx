import React from 'react'
import { twMerge } from 'tailwind-merge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface FilterItemProps {
  key: string
  icon?: IconDefinition
  isActive: boolean
  label: string
  onClick: () => void
}

function FilterItem({ key, icon, isActive, label, onClick }: FilterItemProps) {
  return (
    <div
      key={key}
      className={twMerge(
        'inline-flex gap-2 items-center rounded-lg py-1 px-2 border-2 ',
        isActive
          ? 'text-primary-30 border-primary-30'
          : 'border-neutral-500 text-neutral-500',
      )}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} className="w-4 h-4" />}
      <span>{label}</span>
    </div>
  )
}

export default FilterItem
