import React, { useState, useEffect } from 'react'

// util
import { getLocations, getVenue } from 'utils/api'

// view
import Map from 'components/Map'
import Sidebar from 'components/Sidebar'
import './App.css'

const App = () => {
  const [currentLocation, setCurrentLocation] = useState(null)
  const [isActive, setIsActive] = useState(true)
  const [locations, setLocations] = useState([])

  useEffect(() => {
    getLocations()
      .then(shops => setLocations(shops))
      .catch(() => {
        alert('We couldn\'t get location data. Please try reloading the page.')
      })
  }, [])

  /**
   * @description Display the sidebar
   */
  const displaySidebar = () => {
    setIsActive(true)
  }

  /**
   * @description Toggle the sidebar
   */
  const toggleSidebar = () => {
    setIsActive(!isActive)
  }

  /**
   * @description Update the currentLocation
   * @param {string} venueId - The ID of the venue to retrieve
   */
  const updateCurrentLocation = venueId => {
    if (currentLocation && currentLocation.id === venueId) {
      return
    }

    getVenue(venueId)
      .then(data => {
        setCurrentLocation(data.response.venue)
        displaySidebar()
      })
      .catch(() => {
        alert('We couldn\'t get data from Foursquare.')
      })
  }

  return (
    <main>
      <div
        id="contents"
        className={isActive ? 'contents is-active' : 'contents'}
      >
        <header className="header">
          <h1 className="header__title">Kyoto Chocolate Map</h1>
          <button className="header__btn" onClick={toggleSidebar}>
            <span>Hide Navigation</span>
          </button>
        </header>
        <Map
          currentLocation={currentLocation}
          locations={locations}
          updateCurrentLocation={updateCurrentLocation}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp`}
          loadingElement={<div style={{height: '100%'}} />}
          containerElement={<div className="map" aria-label="Map" role="application" />}
          mapElement={<div style={{height: '100%'}} />}
        />
      </div>
      <Sidebar
        currentLocation={currentLocation}
        isActive={isActive}
        locations={locations}
        updateCurrentLocation={updateCurrentLocation}
      />
    </main>
  )
}

export default App
