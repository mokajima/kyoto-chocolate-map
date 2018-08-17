import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Location from './Location'
import LocationsList from './LocationsList'

class Sidebar extends Component {
  render() {
    const {currentLocation} = this.props
    const tabIndex = this.props.isActive ? 0 : -1

    return (
      <section className="sidebar">
        <h2 className="sidebar__title">Locations</h2>
        <input
          className="filter-locations"
          type="text"
          name="query"
          placeholder="Filter locations"
          value={this.props.query}
          tabIndex={tabIndex}
          onChange={(event) => this.props.updateQuery(event.target.value)}
        />
        {currentLocation.id && (
          <Location location={currentLocation} />
        )}
        <LocationsList
          currentLocation={currentLocation}
          isActive={this.props.isActive}
          locations={this.props.locations}
          updateCurrentLocation={this.props.updateCurrentLocation}
        />
        <div className="attribution">
          <img src="powered-by-foursquare-white.svg" alt="POWERED BY FOURSQUARE" />
        </div>
      </section>
    )
  }
}

Sidebar.propTypes = {
  currentLocation: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  updateCurrentLocation: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired
}

export default Sidebar;
