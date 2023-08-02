import React, { Fragment } from 'react'
import type { ReactNode } from 'react'

import clsx from 'clsx';
import IconCLose from '@/components/Icons/Close'

interface BottomSheetProps {
  open: boolean;
  children: ReactNode | ReactNode[];
  title: string;
  onClose: () => void;
}

const BottomSheet = (props: BottomSheetProps) => {
  const { open, children, title, onClose } = props

  return (
    <Fragment>
      {open && <div className="transition-all duration-500 ease-out fixed top-0 left-0 w-full h-[100%] z-40" style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }} />}
      <div className={clsx('transition-transform duration-200 ease-out w-full bg-white shadow-lg px-4 py-4 rounded-t-2xl', open ? 'transform: translate-y-0' : 'transform: translate-y-[100%]')} style={{ zIndex: 100, position: 'fixed', left: 0, bottom: 0 }}>
        <div className='flex items-center mb-4'>
          <IconCLose className="text-slate-100" onClick={onClose} />
          <div className='font-bold text-lg ml-2'>{title}</div>
        </div>
        {/* <div className='w-full h-[2px] bg-neutral-300 rounded-2xl mt-2 mb-4' /> */}
        {children}
      </div>
    </Fragment>
  )
}

export default BottomSheet