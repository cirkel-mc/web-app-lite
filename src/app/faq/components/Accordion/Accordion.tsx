'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDown,
  faAngleUp

} from '@fortawesome/free-solid-svg-icons'
import { twMerge } from 'tailwind-merge'

interface AccordionProps {
  label: string
  description: string
}

const Accordion = ({ label, description }: AccordionProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={twMerge('bg-white py-2 pb-4 flex gap-4 border-b-[2px] border-b-gray-100', open ? 'items-start' : 'items-center')}>
      <div className='flex flex-col gap-2' onClick={() => setOpen(!open)}>
        <div className='font-medium'>{label}</div>
        <div className={twMerge('text-gray-500 duration-500 ease-in-out', open ? 'block' : 'hidden')}>
          {description}
        </div>
      </div>
      <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown} className=' text-primary-40 w-4 h-4' onClick={() => setOpen(!open)} />
    </div>

  )
}

export default Accordion