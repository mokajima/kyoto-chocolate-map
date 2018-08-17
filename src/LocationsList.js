import React, { Component } from 'react';
import PropTypes from 'prop-types'

class LocationsList extends Component {
  render() {
    const {currentLocation} = this.props

    return (
      <ul className="locations-list" role="listbox">
        {this.props.locations.map((location) => {

          let className = 'locations-list__item'
          className += currentLocation && currentLocation.id === location.venueId ? ' is-active' : ''

          return (
            <li
              className={className}
              key={location.venueId}
              onClick={() => this.props.updateCurrentLocation(location.venueId)}
              role="option"
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
