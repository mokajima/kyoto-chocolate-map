import React from 'react'
import PropTypes from 'prop-types'
import './LocationsList.css'

const LocationsList = props => {
  const {currentLocation} = props

  return (
    <ul className="locations-list" role="listbox">
      {props.locations.map(location => {

        let ariaSelected, className

        if (currentLocation && currentLocation.id === location.venueId) {
          ariaSelected = true
          className = 'locations-list__item is-active'
        } else {
          ariaSelected = false
          className = 'locations-list__item'
        }

        const tabIndex = props.isActive ? 0 : -1

        return (
          <li
            className={className}
            key={location.venueId}
            onClick={() => props.updateCurrentLocation(location.venueId)}
            aria-selected={ariaSelected}
            role="option"
            tabIndex={tabIndex}
          >{location.name}</li>
        )
      })}
    </ul>
  )
}

LocationsList.propTypes = {
  currentLocation: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired,
  updateCurrentLocation: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default LocationsList
