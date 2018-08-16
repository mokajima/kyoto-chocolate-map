import React, { Component } from 'react';
import Location from './Location'

class Sidebar extends Component {
  render() {
    const {currentLocation} = this.props

    return (
      <div className="sidebar">
        <h2 className="sidebar__title">Locations</h2>
        <input
          className="filter-locations"
          type="text"
          name="query"
          placeholder="Filter locations"
          value={this.props.query}
          onChange={(event) => this.props.updateQuery(event.target.value)}
        />
        {currentLocation && (
          <Location location={currentLocation} />
        )}
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
      </div>
    )
  }
}

export default Sidebar;
