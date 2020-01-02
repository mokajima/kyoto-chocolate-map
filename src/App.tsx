import React, { useState } from 'react'
import styled, { css } from 'styled-components'

// api
import { getVenue } from 'services/foursquare/api'

// hook
import useLocations from 'hooks/useLocations'

// model
import { Venue } from 'services/foursquare/models'

// view
import GoogleMap from 'containers/GoogleMap'
import Sidebar from 'components/Sidebar'

interface ContentProps {
  hasMargin: boolean
}

interface TitleProps {
  isShown: boolean
}

const Content = styled.div<ContentProps>`
  margin-left: 0;
  transition: margin-left 0.5s ease;
  position: relative;
  z-index: 1;
  ${props =>
    props.hasMargin &&
    css`
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

const Title = styled.h1<TitleProps>`
  color: #fff;
  font: 20px/60px 'Sofia', cursive;
  ${props =>
    props.isShown &&
    css`
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

const App = () => {
  const [venue, setVenue] = useState<Venue | null>(null)
  const [isActiveSidebar, setIsActiveSidebar] = useState<boolean>(true)

  const { isLoading, locations } = useLocations()

  const onClickLocation = async (venueId: string) => {
    if (venue?.id === venueId) return

    try {
      const data = await getVenue(venueId)
      setVenue(data.response.venue)
      setIsActiveSidebar(true)
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert("We couldn't get data from Foursquare.")
    }
  }

  const toggleSidebar = () => {
    setIsActiveSidebar(v => !v)
  }

  return (
    <main>
      <Content hasMargin={isActiveSidebar}>
        <Header>
          <Title isShown={isActiveSidebar}>Kyoto Chocolate Map</Title>
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
