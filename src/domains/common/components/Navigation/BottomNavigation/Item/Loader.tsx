import React from 'react'
import {
  faHome,
  faMusic,
  faAdd,
  faClockFour,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Item from '../Item'

const Loader = () => {
  return (
    <div className="w-full bg-white fixed bottom-0 left-0 px-2 py-3 shadow-2xl ">
      <div className="max-w-[500px] mx-auto flex justify-around">
        <Item
          loading={true}
          Icon={faHome}
          title="Home"
          isActive={true}

        />
        <Item
          loading={true}
          Icon={faMusic}
          title="Session"
          isActive={true}

        />
        <div
          role="button"
          className="flex flex-col justify-center items-center gap-1 shimmer pt-2 pb-1 px-2 rounded-md"
        >
          <FontAwesomeIcon icon={faAdd} className="w-4 h-4 text-white ml-3" />
          <span className="text-[12px] text-white">Create</span>
        </div>
        <Item
          loading={true}
          Icon={faClockFour}
          title="Order"
          isActive={true}

        />
        <Item
          loading={true}
          Icon={faUser}
          title="Profile"
          isActive={true}

        />
      </div>
    </div>
  )
}

export default Loader