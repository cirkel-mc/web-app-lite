import React from 'react'

interface DateProps {
  date: string;
}

const Date = ({ date }: DateProps) => {
  return (
    <span>{date}</span>
  )
}

export default Date