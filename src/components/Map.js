import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PropTypes from 'prop-types'

const Map = withScriptjs(withGoogleMap(props => {

  const {currentLocation} = props

  const defaultIcon = new window.google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|6dc5c3|40|_|%E2%80%A2',
    new window.google.maps.Size(21, 34),
    new window.google.maps.Point(0, 0),
    new window.google.maps.Point(10, 34),
    new window.google.maps.Size(21, 34)
  )

  const highlightedIcon = new window.google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|f5efde|40|_|%E2%80%A2',
    new window.google.maps.Size(21, 34),
    new window.google.maps.Point(0, 0),
    new window.google.maps.Point(10, 34),
    new window.google.maps.Size(21, 34)
  )

  /**
   * @description Listen for authentication errors
   */
  // eslint-disable-next-line camelcase
  window.gm_authFailure = () => {
    // eslint-disable-next-line no-alert
    alert('We couldn\'t get data from Google Maps')
  }

  return (
    <GoogleMap defaultZoom={13} defaultCenter={{lat: 35.01152, lng: 135.767766}}>
      {props.locations.map(location => {
        const icon = currentLocation && currentLocation.id === location.venueId ? highlightedIcon : defaultIcon

        return (
          <Marker
            key={location.venueId}
            clickable={true}
            icon={icon}
            position={location.position}
            title={location.name}
            onClick={() => props.onClickLocation(location.venueId)}
          />
        )
      })}
    </GoogleMap>
  )
}))

Map.propTypes = {
  currentLocation: PropTypes.oneOfType([PropTypes.object.isRequired, null]),
  locations: PropTypes.array.isRequired,
  googleMapURL: PropTypes.string.isRequired,
  loadingElement: PropTypes.element.isRequired,
  containerElement: PropTypes.element.isRequired,
  mapElement: PropTypes.element.isRequired,
  onClickLocation: PropTypes.func.isRequired
}

export default Map
