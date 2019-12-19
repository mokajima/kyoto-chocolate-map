import React, { FC } from 'react'
import styled from 'styled-components'

// model
import { Location as LocationType, Venue } from 'services/kyoto-chocolate-map/models'

// view
import LocationsList from './LocationsList'
import Location from './Location'
import Logo from 'powered-by-foursquare-white.svg'

interface Props {
  venue: Venue | null
  locations: LocationType[]
  isActive: boolean
  onClickLocation: (venueId: string) => void
}

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

const Sidebar: FC<Props> = ({
  isActive,
  venue,
  locations,
  onClickLocation
}) => (
  <Section>
    <Title>Locations</Title>
    {venue && (
      <Location location={venue} />
    )}
    <LocationsList
      venue={venue}
      locations={locations}
      tabIndex={isActive ? 0 : -1}
      onClickLocation={onClickLocation}
    />
    <Attribution>
      <img src={Logo} alt="POWERED BY FOURSQUARE" />
    </Attribution>
  </Section>
)

export default Sidebar
