import React from 'react'
import { twMerge } from 'tailwind-merge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClock,
  faMusic,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

interface FilterProps {
  activeKey: string
  setActiveKey: any
}

function Filter({ activeKey, setActiveKey }: FilterProps) {
  return (
    <div className="flex gap-2">
      <div
        className={twMerge(
          'flex gap-2 items-center rounded-xl p-2 border-2',
          activeKey === 'session'
            ? 'text-primary-30 border-primary-30'
            : 'border-neutral-500 text-neutral-500',
        )}
        onClick={() => setActiveKey('session')}
      >
        <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
        <span>Session</span>
      </div>
      <div
        className={twMerge(
          'flex gap-2 items-center rounded-xl p-2 border-2',
          activeKey === 'musician'
            ? 'text-primary-30 border-primary-30'
            : 'border-neutral-500 text-neutral-500',
        )}
        onClick={() => setActiveKey('musician')}
      >
        <FontAwesomeIcon icon={faMusic} className="w-4 h-4" />
        <span>Musician</span>
      </div>
      <div
        className={twMerge(
          'flex gap-2 items-center rounded-xl p-2 border-2',
          activeKey === 'studio'
            ? 'text-primary-30 border-primary-30'
            : 'border-neutral-500 text-neutral-500',
        )}
        onClick={() => setActiveKey('studio')}
      >
        <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
        <span>Studio</span>
      </div>
    </div>
  )
}

export default Filter
