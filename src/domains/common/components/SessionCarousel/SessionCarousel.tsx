import React from 'react'
import Card from './Card'

function SessionCarousel() {
  return (
    <div className="flex gap-4 overflow-auto py-2 px-1">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default SessionCarousel
