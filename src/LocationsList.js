import React, { Component } from 'react';
import PropTypes from 'prop-types'

class LocationsList extends Component {
  render() {
    const {currentLocation} = this.props

    return (
      <ul className="locations-list" role="listbox">
        {this.props.locations.map((location) => {

          let ariaSelected, className, tabIndex

          if (currentLocation && currentLocation.id === location.venueId) {
            ariaSelected = true
            className = 'locations-list__item is-active'
          } else {
            ariaSelected = false
            className = 'locations-list__item'
          }

          tabIndex = this.props.isActive ? 0 : -1

          return (
            <li
              className={className}
              key={location.venueId}
              onClick={() => this.props.updateCurrentLocation(location.venueId)}
              aria-selected={ariaSelected}
              role="option"
              tabIndex={tabIndex}
            >{location.name}</li>
          )
        })}
      </ul>
    )
  }
}

LocationsList.propTypes = {
  currentLocation: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired,
  updateCurrentLocation: PropTypes.func.isRequired
}

export default LocationsList;
