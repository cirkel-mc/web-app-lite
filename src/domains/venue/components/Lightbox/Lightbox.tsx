import React from 'react'
import type { FC } from 'react'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

interface LightboxProps {
  isOpen: boolean
  lat: string
  long: string
  onClose: () => void
}

const Lightbox: FC<LightboxProps> = (props) => {
  const { isOpen, onClose, lat, long } = props

  return (
    <div>
      <div className={twMerge('fixed left-0 top-0 bg-black opacity-90 z-10 w-screen h-screen duration-300 ease-in-out', !isOpen && 'opacity-0 z-0')} onClick={onClose} />
      <div className={twMerge('fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square z-[99] w-4/5 h-[300px] md:min-w-[500px] lg:min-w-[700px]', !isOpen && 'opacity-0 z-0')}>
        <APIProvider apiKey={String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)}>
          <Map
            zoom={11}
            center={{ lat: Number(lat), lng: Number(long) }}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            controlled
          >
            <Marker
              position={{ lat: Number(lat), lng: Number(long) }}
            />
          </Map>
        </APIProvider>
        <Link className='text-white mt-2' href={`https://www.google.com/maps/dir//${lat},${long}`}>Open in maps</Link>
      </div>
    </div>
  )
}

export default Lightbox