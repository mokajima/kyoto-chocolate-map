import React from 'react'
import PropTypes from 'prop-types'
import Location from './Location'
import LocationsList from './LocationsList'
import Logo from '../powered-by-foursquare-white.svg'

const Sidebar = props => {
  const {currentLocation} = props
  const tabIndex = props.isActive ? 0 : -1

  return (
    <section className="sidebar">
      <h2 className="sidebar__title">Locations</h2>
      <input
        className="filter-locations"
        type="text"
        name="query"
        placeholder="Filter locations"
        value={props.query}
        tabIndex={tabIndex}
        onChange={event => props.updateQuery(event.target.value)}
      />
      {currentLocation.id && (
        <Location location={currentLocation} />
      )}
      <LocationsList
        currentLocation={currentLocation}
        isActive={props.isActive}
        locations={props.locations}
        updateCurrentLocation={props.updateCurrentLocation}
      />
      <div className="attribution">
        <img src={Logo} alt="POWERED BY FOURSQUARE" />
      </div>
    </section>
  )
}

Sidebar.propTypes = {
  currentLocation: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  updateCurrentLocation: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default Sidebar
