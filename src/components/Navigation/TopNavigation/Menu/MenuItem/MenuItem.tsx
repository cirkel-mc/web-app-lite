import React from 'react'
import type { FC } from 'react'
import Link from 'next/link';

interface MenuItemProps {
  title: string;
  href: string;
}

const MenuItem: FC<MenuItemProps> = ({ title, href }) => {
  return (
    <Link className='text-teal-600 hover:text-teal-300 cursor-pointer' href={href}>{title}</Link>
  )
}

export default MenuItem