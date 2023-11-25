import React from 'react'
import Link from 'next/link'

import type { ReactNode } from 'react';

interface ThirdPartyLoginProps {
  href: string;
  icon: ReactNode;
  text: string;
}

const ThirdPartyLogin = ({ href, icon, text }: ThirdPartyLoginProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 justify-center w-full text-sm bg-white text-black hover:bg-white mb-2"
    >
      {icon}
      {text}
    </Link>
  )
}

export default ThirdPartyLogin