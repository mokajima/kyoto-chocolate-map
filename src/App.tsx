import React, { FC, useCallback, useState } from 'react'
import styled from 'styled-components'

// hook
import useLocations from 'hooks/useLocations'
import useVenue from 'hooks/useVenue'

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
  bottom: 0;
  cursor: pointer;
  height: 25px;
  left: 15px;
  margin: auto;
  position: absolute;
  top: 0;
  width: 30px;

  span,
  &::before,
  &::after {
    border-radius: 2px;
    border-top: 4px solid #fff;
    content: '';
    display: block;
    width: 100%;
  }

  span {
    font-size: 0;
  }

  &::before {
    position: absolute;
    top: 0;
  }

  &::after {
    bottom: 0;
    position: absolute;
  }
`

const App: FC = () => {
  const [venueId, setVenueId] = useState<string>('')
  const [isActiveSidebar, setIsActiveSidebar] = useState<boolean>(true)

  const { venue } = useVenue(venueId)
  const { isLoading, locations } = useLocations()

  const onClickLocation = useCallback((id: string) => {
    setVenueId(id)
  }, [])

  const toggleSidebar = useCallback(() => {
    setIsActiveSidebar(v => !v)
  }, [])

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
