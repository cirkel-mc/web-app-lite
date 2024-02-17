import React, { useState } from 'react'
import { Music, Time, LocationFill } from '@/views/common/components/Icons'
import clsx from 'clsx'

interface FilterProps {
  activeKey: string;
  setActiveKey: any;
}

const Filter = ({ activeKey, setActiveKey }: FilterProps) => {
  return (
    <div className="flex gap-2">
      <div
        className={clsx(
          'flex gap-2 items-center rounded-xl p-2 border-2',
          activeKey === 'session'
            ? 'text-primary-30 border-primary-30'
            : 'border-neutral-500 text-neutral-500',
        )}
        onClick={() => setActiveKey('session')}
      >
        <Time className="!fill-white" />
        <span>Session</span>
      </div>
      <div
        className={clsx(
          'flex gap-2 items-center rounded-xl p-2 border-2',
          activeKey === 'musician'
            ? 'text-primary-30 border-primary-30'
            : 'border-neutral-500 text-neutral-500',
        )}
        onClick={() => setActiveKey('musician')}
      >
        <Music className="!fill-white" />
        <span>Musician</span>
      </div>
      <div
        className={clsx(
          'flex gap-2 items-center rounded-xl p-2 border-2',
          activeKey === 'studio'
            ? 'text-primary-30 border-primary-30'
            : 'border-neutral-500 text-neutral-500',
        )}
        onClick={() => setActiveKey('studio')}
      >
        <LocationFill className="!fill-white" />
        <span>Session</span>
      </div>
    </div>
  )
}

export default Filter
