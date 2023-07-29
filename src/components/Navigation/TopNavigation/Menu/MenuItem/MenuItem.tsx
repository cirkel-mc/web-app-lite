import React from 'react'
import type { FC } from 'react'

interface MenuItemProps {
  title: string;
  path: string;
}

const MenuItem: FC<MenuItemProps> = ({ title, path }) => {
  return (
    <a className='text-cyan-600 hover:text-cyan-300 cursor-pointer' href={path}>{title}</a>
  )
}

export default MenuItem