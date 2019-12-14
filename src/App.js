import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

// util
import { getLocations, getVenue } from 'utils/api'

// view
import Map from 'components/Map'
import Sidebar from 'components/Sidebar'

const Content = styled.div`
  margin-left: 0;
  transition: margin-left 0.5s ease;
  position: relative;
  z-index: 1;
  ${props => props.isActiveSidebar && css`
    margin-left: 300px;
  `}
`

const Header = styled.header`
  background: #6b5344;
  height: 60px;
  line-height: 60px;
  text-align: center;
  position: relative;
`

const Title = styled.h1`
  color: #fff;
  font: 20px/60px "Sofia", cursive;
  ${props => props.isActiveSidebar && css`
    display: none;
  `}
  @media(min-width: 768px) {
    display: block;
    font-size: 30px;
  }
`

const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  width: 30px;
  height: 25px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  span,
  &::before,
  &::after {
    content: "";
    display: block;
    width: 100%;
    border-top: 4px solid #fff;
    border-radius: 2px;
  }
  span {
    font-size: 0;
  }
  &::before {
    position: absolute;
    top: 0;
  }
  &::after {
    position: absolute;
    bottom: 0;
  }
`

const MapContainer = styled.div`
  height: calc(100vh - 60px);
`

const App = () => {
  const [currentLocation, setCurrentLocation] = useState(null)
  const [isActiveSidebar, setIsActiveSidebar] = useState(true)
  const [locations, setLocations] = useState([])

  useEffect(() => {
    getLocations()
      .then(shops => setLocations(shops))
      .catch(() => {
        alert('We couldn\'t get location data. Please try reloading the page.')
      })
  }, [])

  const displaySidebar = () => {
    setIsActiveSidebar(true)
  }

  const toggleSidebar = () => {
    setIsActiveSidebar(!isActiveSidebar)
  }

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
      <Content isActiveSidebar={isActiveSidebar}>
        <Header>
          <Title isActiveSidebar={isActiveSidebar}>
            Kyoto Chocolate Map
          </Title>
          <Button onClick={toggleSidebar}>
            <span>Hide Navigation</span>
          </Button>
        </Header>
        <Map
          currentLocation={currentLocation}
          locations={locations}
          updateCurrentLocation={updateCurrentLocation}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp`}
          loadingElement={<div style={{height: '100%'}} />}
          containerElement={<MapContainer aria-label="Map" role="application" />}
          mapElement={<div style={{height: '100%'}} />}
        />
      </Content>
      <Sidebar
        currentLocation={currentLocation}
        isActive={isActiveSidebar}
        locations={locations}
        updateCurrentLocation={updateCurrentLocation}
      />
    </main>
  )
}

export default App
