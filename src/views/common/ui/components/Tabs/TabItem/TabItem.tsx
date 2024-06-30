import React from 'react'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TabItemsProps {
  label: string
  isActive: boolean
  component: ReactNode
  onClick: () => void
}

const TabItem = ({ label, isActive, component, onClick }: TabItemsProps) => {
  return (
    <div
      className="relative flex-auto flex-col items-center mb-4"
      onClick={onClick}
    >
      <p
        className={twMerge(
          'text-center text-sm  mb-3 transition-all duration-300',
          isActive ? 'text-primary-20 ' : 'text-gray-500',
        )}
      >
        {label}
      </p>
      <div
        className={twMerge(
          'h-[2px] w-full transition-all duration-300 ease-out ',
          isActive ? 'bg-primary-20' : 'bg-[#717171]',
        )}
      />
    </div>
  )
}

export default TabItem
