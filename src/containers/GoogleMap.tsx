import React, { FC, useRef } from 'react'
import styled from 'styled-components'

// hook
import useGoogle from 'hooks/useGoogle'
import useGoogleMap from 'hooks/useGoogleMap'
import useGoogleMapMarkers from 'hooks/useGoogleMapMarkers'

// model
import { Venue } from 'services/foursquare/models'
import { Location } from 'services/kyoto-chocolate-map/models'

type Props = {
  locations: Location[]
  venue: Venue | null
  onClickLocation: (venueId: string) => void
}

const Container = styled('div')`
  height: calc(100vh - 60px);
`

const GoogleMap: FC<Props> = ({ locations, venue, onClickLocation }) => {
  const containerElement = useRef(null)

  const google = useGoogle()
  const googleMap = useGoogleMap({ containerElement, google })
  useGoogleMapMarkers({ venue, google, googleMap, locations, onClickLocation })

  return (
    <Container aria-label="Map" ref={containerElement} role="application" />
  )
}

export default GoogleMap
