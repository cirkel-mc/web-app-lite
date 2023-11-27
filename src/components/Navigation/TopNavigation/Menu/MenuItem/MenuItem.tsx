import React from 'react'
import type { FC } from 'react'
import Link from 'next/link';

interface MenuItemProps {
  title: string;
  href: string;
}

const MenuItem: FC<MenuItemProps> = ({ title, href }) => {
  return (
    <Link className='text-sky-600 hover:text-sky-300 cursor-pointer' href={href}>{title}</Link>
  )
}

export default MenuItem