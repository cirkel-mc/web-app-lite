'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import BgImage from '@/views/common/assets/placeholder-studio.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faComment,
  faMapLocation,
} from '@fortawesome/free-solid-svg-icons'
import Button from '@/views/common/ui/components/Button'
import Alert from '@/views/common/ui/components/Alert'
import WAImage from '@/views/common/assets/icons8-whatsapp-48.png'
import TwitterImage from '@/views/common/assets/icons8-twitter-48.png'

const DetailSession = () => {
  const router = useRouter()
  const [isJoin, setIsJoin] = useState(false)

  return (
    <div className="relative ">
      <div
        className="absolute top-[30px] left-5 z-10 bg-gray-100 w-9 h-9 rounded-full flex justify-center items-center"
        onClick={() => router.back()}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="h-5 w-5 text-primary-30"
        />
      </div>
      <div className="relative w-full h-[400px]">
        <Image src={BgImage} alt="" fill />
      </div>
      <div className="rounded-t-[24px] bg-white -mt-[40px] w-full h-[600px] absolute top-[300px] left-0">
        {isJoin && (
          <Alert variant="success">
            <p>
              You joined this session. Please wait the creator to approve your
              request.
            </p>
          </Alert>
        )}
        <div className="px-6 pt-4 pb-4">
          <p className="font-medium text-xl text-center mb-4">
            Funk in the city
          </p>

          <div>
            <span className="font-medium">Creator</span>:{' '}
            <span className="text-gray-500">Funky Kopral</span>
          </div>
          <div className="flex gap-2">
            <span className="font-medium">Venue</span>:{' '}
            <span className="text-gray-500 flex gap-2">
              <a
                href="https://www.google.com/maps/dir//-6.245715439710789, 106.7893879997882"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faMapLocation}
                  className="w-4 h-4 text-orange-500 cursor-pointer"
                />
              </a>
              Jakarta, Kemang @Abbe Studio
            </span>
          </div>
          <div>
            <span className="font-medium">Date</span>:{' '}
            <span className="text-gray-500">23 Oct 2024 17:00</span>
          </div>
          <div>
            <span className="font-medium">Genre</span>:{' '}
            <span className="text-gray-500">Jazz, Rock, Funk</span>
          </div>
          <div className="mt-4">
            <span className="font-medium">Share</span>:{' '}
            <div className="flex gap-2 mt-1">
              <a href="whatsapp://send?text=Funk in the city!" target="_blank" rel="noopener noreferrer">
                <Image src={WAImage} width={30} height={30} alt="" />
              </a>
              <a href="https://twitter.com/intent/tweet?text=Funk%20in%20the%20city" target="_blank" rel="noopener noreferrer">
                <Image src={TwitterImage} width={30} height={30} alt="" />
              </a>
            </div>
          </div>

          <p className="mt-6 text-gray-500">
            Currently we are looking a bassist with good jazzy groove. Can lead
            our rythm, accompany our energetic drummer to create good
            harmonization
          </p>

          <div className="mt-4">
            <div className="flex justify-between">
              <p className="font-medium text-lg mb-2">Attendees</p>
            </div>
            <div className="flex gap-4 overflow-auto min-w-full">
              <div className="relative border-[1px] border-gray-200 shadow-md rounded-xl min-w-[170px]">
                <div className=" relative w-[90%] mx-auto h-[148px] p-4 mt-2 ">
                  <Image
                    fill
                    src="https://2.bp.blogspot.com/-QsfnOyJ-dEI/VGujVjP0s6I/AAAAAAAAAZ4/xc4tzZQXuYI/s1600/Damez.jpg"
                    alt=""
                    className="object-cover object-center rounded-full border-2 border-gray-300"
                  />
                </div>
                <div className="flex flex-col mt-4 pb-4">
                  <p className="text-center text-lg font-medium">
                    Damez Nababan
                  </p>
                  <p className="text-gray-400 text-sm text-center">
                    Saxophonist
                  </p>
                  <p className="text-gray-600 text-sm text-center mt-1">
                    Jakarta
                  </p>
                </div>
              </div>
              <div className="relative border-[1px] border-gray-200 shadow-md rounded-xl min-w-[170px]">
                <div className=" relative w-[90%] mx-auto h-[148px] p-4 mt-2 ">
                  <Image
                    fill
                    src="https://i.scdn.co/image/ab6761610000e5eb0b161adcea74072c555e1fb5"
                    alt=""
                    className="object-cover object-center rounded-full border-2 border-gray-300"
                  />
                </div>
                <div className="flex flex-col mt-4 pb-4">
                  <p className="text-center text-lg font-medium">
                    Ibrani Pandean
                  </p>
                  <p className="text-gray-400 text-sm text-center">Bassist</p>
                  <p className="text-gray-600 text-sm text-center mt-1">
                    Jakarta
                  </p>
                </div>
              </div>
              <div className="relative border-[1px] border-gray-200 shadow-md rounded-xl min-w-[170px]">
                <div className=" relative w-[90%] mx-auto h-[148px] p-4 mt-2 ">
                  <Image
                    fill
                    src="data:image/jpeg;base64,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"
                    alt=""
                    className="object-cover object-center rounded-full border-2 border-gray-300"
                  />
                </div>
                <div className="flex flex-col mt-4 pb-4">
                  <p className="text-center text-lg font-medium">
                    Ray Prasetya
                  </p>
                  <p className="text-gray-400 text-sm text-center">Drummer</p>
                  <p className="text-gray-600 text-sm text-center mt-1">
                    Jakarta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg sticky bottom-0 left-0 w-full px-6 py-4 flex gap-4">
          <Button
            variant="primary"
            size="md"
            round="md"
            classes="w-[calc(100%-40px)]"
            onClick={() => {
              setIsJoin(true)
              setTimeout(() => {
                setIsJoin(false)
              }, 2000)
            }}
          >
            Join Session
          </Button>
          <a
            href="mailto:idcirkel@gmail.com"
            className="w-10 h-10 flex justify-center items-center rounded-md border-none shadow-xl"
          >
            <FontAwesomeIcon
              icon={faComment}
              className="w-4 h-4 text-primary-40 cursor-pointer "
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default DetailSession
