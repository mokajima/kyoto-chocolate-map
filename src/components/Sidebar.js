import React from 'react'
import PropTypes from 'prop-types'

// view
import LocationsList from './LocationsList'
import Location from './Location'
import Logo from 'powered-by-foursquare-white.svg'
import './Sidebar.css'

const Sidebar = props => {
  const {currentLocation} = props

  return (
    <section className="sidebar">
      <h2 className="sidebar__title">Locations</h2>
      {currentLocation && (
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
  currentLocation: PropTypes.oneOfType([PropTypes.object.isRequired, null]),
  locations: PropTypes.array.isRequired,
  updateCurrentLocation: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default Sidebar
