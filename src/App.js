import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

// hook
import useGoogle from 'hooks/useGoogle'
import useGoogleMap from 'hooks/useGoogleMap'
import useGoogleMapMarkers from 'hooks/useGoogleMapMarkers'

// util
import { getLocations, getVenue } from 'utils/api'

// view
import Sidebar from 'components/Sidebar'

const Content = styled.div`
  margin-left: 0;
  transition: margin-left 0.5s ease;
  position: relative;
  z-index: 1;
  ${props => props.hasMargin && css`
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
  ${props => props.isShown && css`
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
  const containerElement = useRef(null)
  const google = useGoogle()
  const googleMap = useGoogleMap({ containerElement, google })

  const onClickLocation = venueId => {
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

  useGoogleMapMarkers({ currentLocation, google, googleMap, locations, onClickLocation })

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
    setIsActiveSidebar(v => !v)
  }

  return (
    <main>
      <Content hasMargin={isActiveSidebar}>
        <Header>
          <Title isShown={isActiveSidebar}>
            Kyoto Chocolate Map
          </Title>
          <Button onClick={toggleSidebar}>
            <span>Hide Navigation</span>
          </Button>
        </Header>
        <MapContainer
          ref={containerElement}
          aria-label="Map"
          role="application"
        />
      </Content>
      <Sidebar
        currentLocation={currentLocation}
        isActive={isActiveSidebar}
        locations={locations}
        onClickLocation={onClickLocation}
      />
    </main>
  )
}

export default App
