import React, { Component } from 'react';

class LocationsList extends Component {
  render() {
    const {currentLocation} = this.props

    return (
      <ul className="locations-list">
        {this.props.locations.map((location) => {

          let className = 'locations-list__item'
          className += currentLocation && currentLocation.id === location.venueId ? ' is-active' : ''

          return (
            <li
              className={className}
              key={location.venueId}
              onClick={() => this.props.updateCurrentLocation(location.venueId)}
            >{location.name}</li>
          )
        })}
      </ul>
    )
  }
}

export default LocationsList;
