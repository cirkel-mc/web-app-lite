import React from 'react'

interface TimeProps {
  time: string;
}

const Time = ({time}: TimeProps) => {
  return (
    <span>{time}</span>
  )
}

export default Time