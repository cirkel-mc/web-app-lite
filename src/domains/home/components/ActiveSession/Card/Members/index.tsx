import React from 'react'
import { PersonFill } from '@/domains/common/components/Icons'

interface MembersProps {
  members: string
}

function Members({ members }: MembersProps) {
  return (
    <div className="flex gap-1 justify-between items-center">
      <PersonFill />
      <span>{members}</span>
    </div>
  )
}

export default Members
