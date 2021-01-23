/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return */
import { useEffect, useMemo, useRef } from 'react'

// model
import { Venue } from 'services/foursquare/models'
import { Location } from 'services/kyoto-chocolate-map/models'

type Options = {
  venue: Venue | null
  google: any // eslint-disable-line @typescript-eslint/no-explicit-any
  googleMap: google.maps.Map | null
  locations: Location[]
  onClickLocation: (venueId: string) => void
}

const useGoogleMapMarkers = (options: Options): void => {
  const { venue, google, googleMap, locations, onClickLocation } = options

  const listeners = useRef<google.maps.MapsEventListener[]>([])

  const defaultIcon = useMemo(() => {
    if (!google) return null

    return new google.maps.MarkerImage(
      'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|6dc5c3|40|_|%E2%80%A2',
      new google.maps.Size(21, 34),
      new google.maps.Point(0, 0),
      new google.maps.Point(10, 34),
      new google.maps.Size(21, 34)
    )
  }, [google])

  const highlightedIcon = useMemo(() => {
    if (!google) return null

    return new google.maps.MarkerImage(
      // https://developers.google.com/chart/image/docs/gallery/dynamic_icons#text-pin-with-scaling-and-rotation
      'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|f5efde|40|_|%E2%80%A2',
      new google.maps.Size(21, 34),
      new google.maps.Point(0, 0),
      new google.maps.Point(10, 34),
      new google.maps.Size(21, 34)
    )
  }, [google])

  useEffect(() => {
    if (!google || !googleMap) return

    locations.forEach(({ name, lat, lng, venueId }) => {
      const icon = venue?.id === venueId ? highlightedIcon : defaultIcon

      const marker = new google.maps.Marker({
        icon,
        position: { lat, lng },
        map: googleMap,
        title: name
      })

      const listener = google.maps.event.addListener(marker, 'click', () =>
        onClickLocation(venueId)
      )
      listeners.current = [...listeners.current, listener]
    })

    // eslint-disable-next-line consistent-return
    return () => {
      listeners.current.forEach((listener) => {
        google.maps.event.removeListener(listener)
      })
      listeners.current = []
    }
  }, [
    venue,
    defaultIcon,
    google,
    googleMap,
    highlightedIcon,
    locations,
    onClickLocation
  ])
}

export default useGoogleMapMarkers
