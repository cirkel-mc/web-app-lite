import React from 'react'

const Loader = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-[200px] shimmer h-7 rounded mb-2" />
      <div className="flex gap-3 overflow-auto">
        <div className='min-w-[320px] max-w-[320px] shimmer h-[74px] rounded' />
        <div className='min-w-[320px] max-w-[320px] shimmer h-[74px] rounded' />
        <div className='min-w-[320px] max-w-[320px] shimmer h-[74px] rounded' />
      </div>
    </div>
  )
}

export default Loader