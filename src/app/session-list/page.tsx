'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/domains/common/hooks/auth/use-auth'
import FilterItem from '@/domains/common/components/FilterItem/FilterItem'
import { MOCK_GENRES } from '@/domains/create-session/constants/mock-data-genres'
import SessionCard from '@/domains/session-list/components/SessionCard/SessionCard'
import { useInView, InView } from 'react-intersection-observer'

function Session() {
  const router = useRouter()
  const { user } = useAuth()

  const [active, setActive] = useState('')

  useEffect(() => {
    if (!user) router.push('/login')
  }, [router, user])

  return (
    <div className="mt-[70px] p-[10px]">
      <div className="max-w-[500px] mx-auto">
        <div>
          <span className="text-sm mb-2 inline-block">Choose Session Type</span>
          <div className="flex gap-2 overflow-auto pb-2">
            {MOCK_GENRES.map((item, key) => (
              <FilterItem
                key={String(item)}
                isActive={active === item}
                label={item}
                onClick={() => setActive(item)}
              />
            ))}
          </div>
        </div>
        <div className="flex  flex-col gap-2 overflow-auto pb-3">
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
        </div>
      </div>
    </div>
  )
}

export default Session
