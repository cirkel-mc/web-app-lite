import React from 'react'
import Image from 'next/image'
import PlaceholderImage from '@/views/common/assets/PlaceholderCardImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faUser, faFilter } from '@fortawesome/free-solid-svg-icons'

export default function MusicianDetailPage() {
  return (
    <div className="mt-[70px] p-[10px] max-w-[500px] overflow-hidden">
      <div className="flex gap-4 mb-6">
        <div className="shadow-[0px_0px_10px_rgba(0,0,0,0.25)] rounded pb-5 flex flex-col justify-center items-center">
          <Image
            src={PlaceholderImage}
            width={96}
            height={80}
            alt=""
            priority
            className="w-full"
          />
          <div className="px-4 flex flex-col items-center">
            <p className="text-2xl font-bold">User Name</p>
            <p>[instrument]</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base">Detail Info</p>
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon
              icon={faPerson}
              className="text-primary-10 w-4 h-4"
            />
            <span>3 Bands</span>
          </div>
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="text-primary-10 w-4 h-4"
            />
            <span>Guitar</span>
          </div>
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="text-primary-10 w-4 h-4"
            />
            <span>Jazz Rock Punk</span>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <p>Review</p>
          <FontAwesomeIcon
            icon={faFilter}
            className="text-neutral-500 w-4 h-4"
          />
        </div>
        <div className="flex gap-2 overflow-auto py-2">
          <div className="flex shadow-[0px_0px_10px_rgba(0,0,0,0.25)] rounded min-w-[250px]">
            <Image
              src={PlaceholderImage}
              width={80}
              height={61}
              alt=""
              priority
              className="w-full"
            />
            <div className="flex flex-col gap-1 justify-center p-5 pl-0">
              <p className="text-2xl font-medium">User_Name</p>
              <p>Review</p>
            </div>
          </div>
          <div className="flex shadow-[0px_0px_10px_rgba(0,0,0,0.25)] rounded min-w-[250px]">
            <Image
              src={PlaceholderImage}
              width={80}
              height={61}
              alt=""
              priority
              className="w-full"
            />
            <div className="flex flex-col gap-1 justify-center p-5 pl-0">
              <p className="text-2xl font-medium">User_Name</p>
              <p>Review</p>
            </div>
          </div>
          <div className="flex shadow-[0px_0px_10px_rgba(0,0,0,0.25)] rounded min-w-[250px]">
            <Image
              src={PlaceholderImage}
              width={80}
              height={61}
              alt=""
              priority
              className="w-full"
            />
            <div className="flex flex-col gap-1 justify-center p-5 pl-0">
              <p className="text-2xl font-medium">User_Name</p>
              <p>Review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
