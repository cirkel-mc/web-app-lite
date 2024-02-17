import { useState, useEffect, useCallback } from 'react'

interface WindowDimentions {
  width: number
  height: number
}

export const useScreenSize = (): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<any>({
    width: 0,
    height: 0,
  })

  const handleResize = useCallback(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return { width: windowDimensions.width, height: windowDimensions.height }
}
