import React, { FC } from 'react'
import styled from 'styled-components'

// model
import { Venue } from 'services/foursquare/models'
import { Location as LocationType } from 'services/kyoto-chocolate-map/models'

// theme
import theme from 'theme'

// view
import Logo from 'powered-by-foursquare-white.svg'
import LocationsList from '../LocationsList'
import Location from '../Location'
import Loader from '../Loader'

type Props = {
  venue: Venue | null
  locations: LocationType[]
  isActive: boolean
  isLoading: boolean
  onClickLocation: (venueId: string) => void
}

const Section = styled('section')`
  background: ${theme.chocolate.milk};
  box-sizing: border-box;
  color: ${theme.white};
  height: 100%;
  left: 0;
  overflow-y: scroll;
  padding: 0 10px 28px;
  position: fixed;
  top: 0;
  width: 300px;
`

const Title = styled('h2')`
  letter-spacing: 1px;
  line-height: 60px;
`

const Attribution = styled('div')`
  margin: 0 auto;
  width: 75%;
`

const Sidebar: FC<Props> = ({
  isActive,
  isLoading,
  venue,
  locations,
  onClickLocation
}) => (
  <Section>
    <Title>Locations</Title>
    {isLoading ? (
      <Loader />
    ) : (
      <>
        {venue && <Location location={venue} />}
        <LocationsList
          venue={venue}
          locations={locations}
          tabIndex={isActive ? 0 : -1}
          onClickLocation={onClickLocation}
        />
      </>
    )}
    <Attribution>
      <img src={Logo} alt="POWERED BY FOURSQUARE" />
    </Attribution>
  </Section>
)

export default Sidebar
