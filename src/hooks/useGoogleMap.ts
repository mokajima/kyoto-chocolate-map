import { RefObject, useEffect, useState } from 'react'

type Options = {
  containerElement: RefObject<HTMLDivElement>
  google: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

const INITIAL_CONFIG = {
  center: {
    lat: 35.01152,
    lng: 135.767766
  },
  zoom: 13
}

const useGoogleMap = (options: Options): google.maps.Map | null => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { containerElement, google } = options

  const [googleMap, setGoogleMap] = useState<google.maps.Map | null>(null)

  useEffect(() => {
    if (!google || !containerElement.current) return

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,  @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const map = new google.maps.Map(containerElement.current, INITIAL_CONFIG)
    setGoogleMap(map)
  }, [containerElement, google])

  return googleMap
}

export default useGoogleMap
