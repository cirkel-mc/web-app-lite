import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { twMerge } from 'tailwind-merge'

interface ToggleItemProps {
  label: string
  icon: typeof faMusic
  className?: string
  selected: string
  onClick: (e: string) => void
}

function ToggleItem({
  label,
  icon,
  className,
  selected,
  onClick,
}: ToggleItemProps) {
  return (
    <div
      className={twMerge(
        'rounded-lg p-2.5 box-border flex flex-col gap-2 items-center cursor-pointer',
        selected === label
          ? ' bg-primary-10 text-white'
          : 'text-neutral-900 bg-white border-[1px] border-neutral-900',
        className,
      )}
      onClick={() => onClick(label)}
    >
      <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      <p>{label}</p>
    </div>
  )
}

export default ToggleItem
