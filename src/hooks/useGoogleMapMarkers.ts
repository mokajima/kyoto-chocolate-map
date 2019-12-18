import { useEffect, useMemo, useRef } from 'react'

// model
import { Location, Venue } from 'services/kyoto-chocolate-map/models'

const useGoogleMapMarkers = (
  currentLocation: Venue | null,
  google: any,
  googleMap: any,
  locations: Location[],
  onClickLocation: (venueId: string) => void
) => {
  const listeners = useRef<any[]>([])

  const defaultIcon = useMemo(() => {
    if (!google) return null

    return new google.maps.MarkerImage(
      // https://developers.google.com/chart/image/docs/gallery/dynamic_icons#text-pin-with-scaling-and-rotation
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

    locations.forEach(({ name, position, venueId }) => {
      const icon = currentLocation && currentLocation.id === venueId
        ? highlightedIcon
        : defaultIcon

      const marker = new google.maps.Marker({
        icon,
        position,
        map: googleMap,
        title: name
      })

      const listener = google.maps.event.addListener(marker, 'click', () => onClickLocation(venueId))
      listeners.current = [...listeners.current, listener]
    })

    return () => {
      listeners.current.forEach(listener => {
        google.maps.event.removeListener(listener)
      })
      listeners.current = []
    }
  }, [currentLocation, defaultIcon, google, googleMap, highlightedIcon, locations, onClickLocation])
}

export default useGoogleMapMarkers
