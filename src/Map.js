import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) => {

  const {currentLocation} = props

  const defaultIcon = new window.google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|6dc5c3|40|_|%E2%80%A2',
    new window.google.maps.Size(21, 34),
    new window.google.maps.Point(0, 0),
    new window.google.maps.Point(10, 34),
    new window.google.maps.Size(21,34)
  )

  const highlightedIcon = new window.google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|f5efde|40|_|%E2%80%A2',
    new window.google.maps.Size(21, 34),
    new window.google.maps.Point(0, 0),
    new window.google.maps.Point(10, 34),
    new window.google.maps.Size(21,34)
  )

  return (
    <GoogleMap defaultZoom={14} defaultCenter={{lat: 35.01152, lng: 135.767766}}>
      {props.showingLocations.map((location) => {
        const icon = currentLocation && currentLocation.id === location.venueId ? highlightedIcon : defaultIcon

        return (
          <Marker
            key={location.venueId}
            title={location.name}
            position={location.position}
            icon={icon}
            onClick={() => props.updateCurrentLocation(location.venueId)}
          />
        )
      })}
    </GoogleMap>
  )
}))

export default Map;
