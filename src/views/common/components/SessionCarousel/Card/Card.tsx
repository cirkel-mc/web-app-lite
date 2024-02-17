import React from 'react'
import Button from '@/views/common/ui/components/Button'
import { PersonPrimary, HomePrimary } from '../../Icons'

const Card = () => {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl p-5 shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
      <p className="text-2xl font-semibold mb-1">Session_Name</p>
      <div className="flex justify-center gap-4">
        <div className="flex gap-1 items-center">
          <PersonPrimary />
          <span className="text-sm">3</span>
        </div>
        <div className="flex gap-1 items-center">
          <HomePrimary size={16} />
          <span className="text-sm">10</span>
        </div>
      </div>
      <p className="text-neutral-500 text-center mt-1">@user_name</p>
      <Button
        size="sm"
        round="sm"
        classes="text-base font-normal lg:font-semibold lg:text-[18px] lg:p-[10px] mt-2"
        variant="primary"
      >
        Join
      </Button>
    </div>
  )
}

export default Card
