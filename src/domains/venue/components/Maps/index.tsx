'use client'

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

interface MapsProps {
  lat: string
  long: string
  onClick: () => void
}

const Maps = ({ lat, long, onClick }: MapsProps) => {
  return (
    <APIProvider apiKey={String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)}>
      <Map
        zoom={11}
        center={{ lat: Number(lat), lng: Number(long) }}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        controlled
        onClick={onClick}
      >
        <Marker
          position={{ lat: Number(lat), lng: Number(long) }}
          onClick={onClick}
        />
      </Map>
    </APIProvider>
  )
}

export default Maps
