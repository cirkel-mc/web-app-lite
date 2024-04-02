'use client'

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPerson, faCopy } from '@fortawesome/free-solid-svg-icons'
import Loader from './Loader'
import { useInView } from 'react-intersection-observer'

const SessionCard = () => {
  const [mounted, setMounted] = useState(false)
  const {
    ref,
    inView: v,
    entry: e,
  } = useInView({
    threshold: [0, 0.25, 0.5, 0.75, 1],
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  return v || mounted ? (
    <div className="border-primary-10 border-[1px] flex relative" ref={ref}>
      <div className="p-2 bg-primary-10 max-w-[90px]">
        <p>MM/DD</p>
        <p>HH:MM</p>
      </div>
      <div className="p-2 flex flex-col gap-1 relative">
        <p>Session_Title</p>
        <div className="flex gap-2">
          <div className="flex gap-[2px] items-center">
            <FontAwesomeIcon
              icon={faPerson}
              className="w-4 h-4 text-primary-10"
            />
            <span className="text-sm">3</span>
          </div>
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="w-3 h-3 text-primary-10"
            />
            <span className="text-sm">User_Name</span>
          </div>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faCopy}
        className="w-4 h-4 text-primary-10 absolute top-2 right-2"
        onClick={() => console.log('copied')}
      />
    </div>
  ) : (
    <Loader />
  )
}

export default SessionCard
