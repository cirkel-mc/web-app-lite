import React from 'react'

function Bill() {
  return (
    <div className="mt-6">
      <div className="flex w-full justify-between mb-1">
        <p className='text-gray-600'>1. Rent (1 hour)</p>
        <p className='text-gray-600'>Rp. 150.000</p>
      </div>
      <div className="flex w-full justify-between">
        <p className='text-gray-600'>2. Admin Fee</p>
        <p className='text-gray-600'>Rp. 20.000</p>
      </div>
    </div>
  )
}

export default Bill
