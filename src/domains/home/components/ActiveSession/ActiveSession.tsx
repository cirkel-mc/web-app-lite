import React from 'react'
import Card from './Card/Card'

const ActiveSession = () => {
  return (
    <div className='overflow-hidden'>
      <p className='text-2xl font-semibold mb-2'>Active Session</p>
      <div className='flex gap-3 overflow-auto'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default ActiveSession