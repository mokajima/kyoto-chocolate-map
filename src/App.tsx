import React, { FC, useCallback, useState } from 'react'
import styled from 'styled-components'

// api
import { getVenue } from 'services/foursquare/api'

// hook
import useLocations from 'hooks/useLocations'

// model
import { Venue } from 'services/foursquare/models'

// view
import GoogleMap from 'containers/GoogleMap'
import Sidebar from 'components/Sidebar'

const Content = styled('div')<{ hasMargin: boolean }>`
  margin-left: ${props => (props.hasMargin ? '300px' : 0)};
  position: relative;
  transition: margin-left 0.5s ease;
  z-index: 1;
`

const Header = styled('header')`
  background: #6b5344;
  height: 60px;
  line-height: 60px;
  position: relative;
  text-align: center;
`

const Title = styled('h1')<{ isShown: boolean }>`
  color: #fff;
  display: ${props => (props.isShown ? 'block' : 'none')};
  font: 20px/60px 'Sofia', cursive;
  @media (min-width: 768px) {
    display: block;
    font-size: 30px;
  }
`

const Button = styled('button')`
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
    content: '';
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

const App: FC = () => {
  const [venue, setVenue] = useState<Venue | null>(null)
  const [isActiveSidebar, setIsActiveSidebar] = useState<boolean>(true)

  const { isLoading, locations } = useLocations()

  const onClickLocation = useCallback(
    async (venueId: string) => {
      if (venue?.id === venueId) return

      try {
        const data = await getVenue(venueId)
        setVenue(data.response.venue)
        setIsActiveSidebar(true)
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert("We couldn't get data from Foursquare.")
      }
    },
    [venue]
  )

  const toggleSidebar = () => {
    setIsActiveSidebar(v => !v)
  }

  return (
    <main>
      <Content hasMargin={isActiveSidebar}>
        <Header>
          <Title isShown={!isActiveSidebar}>Kyoto Chocolate Map</Title>
          <Button onClick={toggleSidebar}>
            <span>Hide Navigation</span>
          </Button>
        </Header>
        <GoogleMap
          locations={locations}
          venue={venue}
          onClickLocation={onClickLocation}
        />
      </Content>
      <Sidebar
        venue={venue}
        isActive={isActiveSidebar}
        isLoading={isLoading}
        locations={locations}
        onClickLocation={onClickLocation}
      />
    </main>
  )
}

export default App
