'use client'

import React, { useState } from 'react'
import MobileLayout from '@/views/common/ui/components/Layout/MobileLayout'
import FilterItem from '@/domains/common/components/FilterItem/FilterItem'
import { MOCK_GENRES } from '@/domains/create-session/constants/mock-data-genres'
import SessionCard from '@/domains/session-list/components/SessionCard/SessionCard'

function Session() {
  const [active, setActive] = useState('')

  return (
    <MobileLayout>
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
    </MobileLayout>
  )
}

export default Session
