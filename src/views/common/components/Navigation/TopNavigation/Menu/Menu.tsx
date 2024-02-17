import React from 'react'
import clsx from 'clsx'
import BottomSheet from '@/views/common/components/BottomSheet'
import { useAuth } from '@/domains/common/hooks/auth/use-auth'
import { Reserve, MusicPlay, Profile, LoginCurve, Note } from 'iconsax-react'
import Link from 'next/link'

interface MenuProps {
  show: boolean
  onClose: () => void
}

const Menu = (props: MenuProps) => {
  const { show, onClose } = props
  const { user } = useAuth()

  return (
    <BottomSheet title="My Menu" open={show} onClose={onClose}>
      <div className="pt-4 pl-3 pb-4 flex flex-col gap-7 max-w-[500px] mx-auto md:max-w-[700px] lg:max-w-[1024px]">
        <Link
          key={0}
          className="text-black hover:opacity-60 flex gap-2 items-center"
          href="/venue"
        >
          <Reserve size="24" color="#0A0A0A" />
          Book venue
        </Link>
        <Link
          key={1}
          className="text-black hover:opacity-60 flex gap-2 items-center"
          href="/activities"
        >
          <MusicPlay size="24" color="#0A0A0A" />
          Session
        </Link>
        {/* <Link
          key={2}
          className="text-black hover:opacity-60 flex gap-2 items-center"
          href="/learn"
        >
          <AudioSquare size="24" color="#0A0A0A" />
          Learn
        </Link> */}
        <Link
          key={2}
          className="text-black hover:opacity-60 flex gap-2 items-center"
          href="/learn"
        >
          <Note size="24" color="#0A0A0A" />
          Blog
        </Link>
        {user ? (
          <Link
            key={2}
            className="text-black hover:opacity-60 flex gap-2 items-center"
            href="/profile"
          >
            <Profile size="24" color="#0A0A0A" />
            Profile
          </Link>
        ) : (
          <Link
            key={2}
            className="text-black hover:opacity-60 flex gap-2 items-center"
            href="/login"
          >
            <LoginCurve size="24" color="#0A0A0A" />
            Sign in
          </Link>
        )}
      </div>
    </BottomSheet>
  )
}

export default Menu
