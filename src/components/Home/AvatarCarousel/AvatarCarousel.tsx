import React from 'react'
import Card from './Card'

const AvatarCarousel = () => {
  return (
    <div className='mt-8 pr-4'>
      <p className='text-base font-medium mb-4'>Recommended Musician</p>
      <div className='flex gap-2 flex-nowrap overflow-auto pb-2' style={{ width: 'calc(100% + 20px)' }}>
        <Card key={1} />
        <Card key={2} />
        <Card key={3} />
        <Card key={4} />
        <Card key={5} />
        <Card key={6} />
        <Card key={7} />
      </div>
    </div>
  )
}

export default AvatarCarousel