import { RefObject, useEffect, useState } from 'react'

const INITIAL_CONFIG = {
  center: {
    lat: 35.01152,
    lng: 135.767766
  },
  zoom: 13
}

const useGoogleMap = (
  containerElement: RefObject<HTMLDivElement>,
  google: any // eslint-disable-line @typescript-eslint/no-explicit-any
) => {
  const [googleMap, setGoogleMap] = useState<google.maps.Map | null>(null)

  useEffect(() => {
    if (!google || !containerElement.current) return

    const map = new google.maps.Map(containerElement.current, INITIAL_CONFIG)
    setGoogleMap(map)
  }, [containerElement, google])

  return googleMap
}

export default useGoogleMap
