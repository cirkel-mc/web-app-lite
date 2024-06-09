import { useState, useEffect, useMemo } from 'react'
import { getCurrentLocation } from '@/domains/common/utils/geolocation/get-current-location'

interface GeoLocationType {
  latitude: number;
  longitude: number;
}

export function useGeolocation() {
  const [location, setLocation] = useState<GeoLocationType>({ latitude: 0, longitude: 0 })

  useEffect(() => {
    getCurrentLocation((pos) => setLocation({ latitude: pos?.coords?.latitude, longitude: pos?.coords?.longitude }))
  }, [])

  const normalizedLocation = useMemo(() => {
    if (location.latitude === 0 || location.longitude === 0) return null

    return location
  }, [location.latitude, location.longitude])

  return { location: normalizedLocation }
}
