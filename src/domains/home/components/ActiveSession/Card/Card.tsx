import React from 'react'
import Link from 'next/link'
import Chips from './Chips'
import Date from './Date'
import Time from './Time'
import Title from './Title'
import Members from './Members'
import Studio from './Studio'
import Hour from './Hour'

function Card() {
  return (
    <Link href="/session/rehearsal-funkop">
      <div className="border-[1px] border-primary-10 flex min-w-[320px] max-w-[320px]">
        <div className="bg-primary-10 p-2 flex flex-col">
          <Date date="MM/DD" />
          <Time time="HH:MM" />
        </div>
        <div className="p-2 w-full flex flex-col gap-1">
          <div className="flex justify-between w-full">
            <Title title="Session_Name" />
            <Chips status="active" />
          </div>
          <div className="flex gap-2">
            <Members members="3" />
            <Studio studio="Studio Name" />
            <Hour hour="1 hour" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
