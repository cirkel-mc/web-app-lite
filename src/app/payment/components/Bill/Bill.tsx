import React from 'react'

const Bill = () => {
  return (
    <div className="mt-6">
      <div className="flex w-full justify-between mb-1">
        <p className="text-sm">1. Rent (1 hour)</p>
        <p className="text-sm">Rp. 150.000</p>
      </div>
      <div className="flex w-full justify-between">
        <p className="text-sm">2. Admin Fee</p>
        <p className="text-sm">Rp. 20.000</p>
      </div>
      <div className="flex mt-3 w-full justify-between pl-3">
        <p className="font-bold">Total</p>
        <p className="font-bold">Rp. 170.000</p>
      </div>
    </div>
  )
}

export default Bill
