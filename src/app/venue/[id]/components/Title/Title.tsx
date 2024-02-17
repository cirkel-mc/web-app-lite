import React from 'react'
import type { FC } from 'react'

interface TitleProps {
  title: string
}

const Title: FC<TitleProps> = ({ title }) => {
  return <div className="text-center text-lg font-bold mt-4 mb-4">{title}</div>
}

export default Title
