import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// view
import LocationsList from './LocationsList'
import Location from './Location'
import Logo from 'powered-by-foursquare-white.svg'

const Section = styled.section`
  background: #a79c8e;
  box-sizing: border-box;
  color: #fff;
  padding: 0 10px 28px;
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  overflow-y: scroll;
`

const Title = styled.h2`
  letter-spacing: 1px;
  line-height: 60px;
`

const Attribution = styled.div`
  margin: 0 auto;
  width: 75%;
`

const Sidebar = ({
  isActive,
  currentLocation,
  locations,
  onClickLocation
}) => (
  <Section>
    <Title>Locations</Title>
    {currentLocation && (
      <Location location={currentLocation} />
    )}
    <LocationsList
      currentLocation={currentLocation}
      isActiveSidebar={isActive}
      locations={locations}
      onClickLocation={onClickLocation}
    />
    <Attribution>
      <img src={Logo} alt="POWERED BY FOURSQUARE" />
    </Attribution>
  </Section>
)

Sidebar.propTypes = {
  currentLocation: PropTypes.oneOfType([PropTypes.object.isRequired, null]),
  locations: PropTypes.array.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClickLocation: PropTypes.func.isRequired
}

export default Sidebar
