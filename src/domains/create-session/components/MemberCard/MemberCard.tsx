'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { MusicianAttribute } from '@/models/user/types/musician-types'
import Image from 'next/image'
import PlaceholderImage from '@/views/common/assets/placeholder-musician.png'

interface Deps {
  onClick: () => void
  isEmpty?: boolean
  member?: Partial<MusicianAttribute>
}

export default function MemberCard({ onClick, member, isEmpty }: Deps) {
  return (
    <div>
      <div className="w-[120px] h-[120px] flex justify-center items-center shadow-[0px_0px_10px_rgba(0,0,0,0.25)] rounded">
        {isEmpty && (
          <div
            className="rounded-[100%] border-[1px] border-primary-20 border-spacing-3 border-dashed w-[80px] h-[80px] flex flex-col gap-1 justify-center items-center"
            onClick={onClick}
          >
            <>
              <FontAwesomeIcon
                icon={faPlus}
                className="w-4 h-4 text-primary-30"
              />
              <p className="text-primary-30">Create</p>
            </>
          </div>
        )}
        {member && (
          <div className="flex flex-col justify-center items-center">
            <Image src={PlaceholderImage} alt="" width={60} height={60} />
            <p className="text-sm mt-1">{member.fullname}</p>
            <p className="text-xs text-neutral-400">
              {member.skills?.length && member?.skills[0]}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
