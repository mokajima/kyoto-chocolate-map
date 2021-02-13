import React, { FC, useRef } from 'react'

// hook
import useGoogle from 'hooks/useGoogle'
import useGoogleMap from 'hooks/useGoogleMap'
import useGoogleMapMarkers from 'hooks/useGoogleMapMarkers'
import useLocations from 'hooks/useLocations'
import useVenue from 'hooks/useVenue'

// view
import styles from 'containers/GoogleMap.module.css'

type Props = {
  venueId: string
  onClickLocation: (venueId: string) => void
}

const GoogleMap: FC<Props> = ({ venueId, onClickLocation }) => {
  const containerElement = useRef(null)

  const { locations } = useLocations()
  const { venue } = useVenue(venueId)

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const google = useGoogle()

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const googleMap = useGoogleMap({ containerElement, google })

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  useGoogleMapMarkers({ venue, google, googleMap, locations, onClickLocation })

  return (
    <div
      className={styles.container}
      aria-label="Map"
      ref={containerElement}
      role="application"
    />
  )
}

export default GoogleMap
