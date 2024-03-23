import React from 'react'

interface DateProps {
  date: string
}

function Date({ date }: DateProps) {
  return <span>{date}</span>
}

export default Date
