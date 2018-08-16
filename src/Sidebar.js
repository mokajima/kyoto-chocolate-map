import React, { Component } from 'react';
import Location from './Location'
import LocationsList from './LocationsList'

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
        <LocationsList
          currentLocation={currentLocation}
          locations={this.props.locations}
          updateCurrentLocation={this.props.updateCurrentLocation}
        />
      </div>
    )
  }
}

export default Sidebar;
