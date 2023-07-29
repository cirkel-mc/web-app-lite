import React from 'react'

const PurchaseBox = () => {
  return (
    <div className='sticky bottom-0 left-0 shadow-2xl w-full px-4 py-4 rounded bg-sky-600'>
      <div className='max-w-[500px] mx-auto flex items-center justify-between'>
        <p className='text-white'>Rp 300.000/hour</p>
        <button className='bg-white px-2 py-2 rounded-lg'>Book Now!</button>
      </div>
    </div>
  )
}

export default PurchaseBox