import React from 'react'

interface TimeProps {
  time: string
}

function Time({ time }: TimeProps) {
  return <span>{time}</span>
}

export default Time
