import React from 'react'

import clsx from 'clsx'

interface MenuProps {
  show: boolean;
}

const Menu = (props: MenuProps) => {
  const { show } = props

  return (
    <div className={clsx('bg-white shadow-md transition-all duration-500 ease-out fixed top-[68px] left-0 w-full h-full pt-7 pl-5 pb-6 pr-4 z-40', show ? 'translate-y-0' : 'translate-y-[100%]')}>
      <div className='flex flex-col gap-4 max-w-[500px] mx-auto md:max-w-[700px] lg:max-w-[1024px]'>
        <a key={0} className='text-cyan-600 hover:text-cyan-300' href='/venue'>Book venue</a>
        <a key={1} className='text-cyan-600 hover:text-cyan-300' href='/activities'>Jamming</a>
        <a key={2} className='text-cyan-600 hover:text-cyan-300' href='/learn'>Learn</a>
        <a key={2} className='text-cyan-600 hover:text-cyan-300' href='/login'>Sign in</a>
      </div>
    </div>
  )
}

export default Menu