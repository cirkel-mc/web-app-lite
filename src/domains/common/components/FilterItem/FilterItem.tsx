import React from 'react'
import { twMerge } from 'tailwind-merge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface FilterItemProps {
  icon?: IconDefinition
  isActive: boolean
  label: string
  onClick: () => void
}

function FilterItem({ icon, isActive, label, onClick }: FilterItemProps) {
  return (
    <div
      className={twMerge(
        'inline-flex gap-1 items-center rounded-[10px] py-1 px-2 border-[1px] border-gray-200 shadow-sm ',
        isActive
          ? 'text-white bg-primary-30'
          : 'bg-white text-gray-500',
      )}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} className="w-4 h-4" />}
      <span className="font-medium">{label}</span>
    </div>
  )
}

export default FilterItem
