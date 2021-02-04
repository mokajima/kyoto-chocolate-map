import React, { FC, useRef } from 'react'

// hook
import useGoogle from 'hooks/useGoogle'
import useGoogleMap from 'hooks/useGoogleMap'
import useGoogleMapMarkers from 'hooks/useGoogleMapMarkers'

// model
import { Venue } from 'services/foursquare/models'
import { Location } from 'services/kyoto-chocolate-map/models'

// view
import styles from 'containers/GoogleMap.module.css'

type Props = {
  locations: Location[]
  venue: Venue | null
  onClickLocation: (venueId: string) => void
}

const GoogleMap: FC<Props> = ({ locations, venue, onClickLocation }) => {
  const containerElement = useRef(null)

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
