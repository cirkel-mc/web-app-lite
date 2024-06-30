import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { twMerge } from 'tailwind-merge'

interface BottomNavigationItemProps {
  loading: boolean;
  Icon: any
  isActive: boolean
  title: string
  onClick?: () => void
}

function BottomNavigationItem(props: BottomNavigationItemProps) {
  const { Icon, isActive, title, loading, onClick } = props

  return (
    <div
      className="flex flex-col justify-center items-center gap-1"
      onClick={onClick}
    >
      {
        loading ? (
          <div className='flex flex-col items-center gap-2'>
            <div className='shimmer w-5 h-5 rounded' />
            <div className='shimmer w-[50px] h-4 rounded' />
          </div>) : (
          <>
            <FontAwesomeIcon
              icon={Icon}
              className={twMerge(
                'duration-400 w-4 h-4',
                isActive ? '!text-primary-40' : 'text-neutral-500',
              )}
            />
            <span
              className={twMerge(
                'text-[12px] inline-block mt-1',
                isActive ? '!text-primary-40' : 'text-neutral-500',
              )}
            >
              {title}
            </span>
          </>
        )
      }

    </div>
  )
}

export default BottomNavigationItem
