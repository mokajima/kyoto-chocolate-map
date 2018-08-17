import React, { Component } from 'react';
import PropTypes from 'prop-types'

class LocationsList extends Component {
  render() {
    const {currentLocation} = this.props

    return (
      <ul className="locations-list" role="listbox">
        {this.props.locations.map((location) => {

          let className, ariaSelected

          if (currentLocation && currentLocation.id === location.venueId) {
            className = 'locations-list__item is-active'
            ariaSelected = true
          } else {
            className = 'locations-list__item'
            ariaSelected = false
          }

          return (
            <li
              className={className}
              key={location.venueId}
              onClick={() => this.props.updateCurrentLocation(location.venueId)}
              aria-selected={ariaSelected}
              role="option"
              tabIndex="0"
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
