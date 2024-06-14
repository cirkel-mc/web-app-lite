import React, { Fragment, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'
import IconCLose from '@/domains/common/components/Icons/Close'

interface BottomSheetProps {
  open: boolean
  children: ReactNode | ReactNode[]
  title: string
  onClose: () => void
}

function BottomSheet(props: BottomSheetProps) {
  const { open, children, title, onClose } = props
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      {open && (
        <div
          className="transition-all duration-500 ease-out fixed top-0 left-0 w-full h-[100%] z-40"
          style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }}
          onClick={onClose}
        />
      )}
      <div
        className={twMerge(
          'transition-transform duration-200 ease-out w-full bg-white shadow-lg px-4 py-4 rounded-t-2xl',
          open && loaded
            ? 'transform: translate-y-0'
            : 'transform: translate-y-[100%]',
        )}
        style={{
          zIndex: 100,
          position: 'fixed',
          left: 0,
          bottom: 0,
        }}
      >
        <div className="flex items-center mb-4">
          <IconCLose
            className="text-slate-100 cursor-pointer"
            onClick={onClose}
          />
          <div className="font-bold text-lg ml-2 text-black">{title}</div>
        </div>
        {/* <div className='w-full h-[2px] bg-neutral-300 rounded-2xl mt-2 mb-4' /> */}
        {children}
      </div>
    </>
  )
}

export default BottomSheet
