import React, { FC } from 'react'
import styled from 'styled-components'

// model
import { Venue } from 'services/foursquare/models'
import { Location } from 'services/kyoto-chocolate-map/models'

// theme
import theme from 'theme'

type Props = {
  venue: Venue | null
  locations: Location[]
  tabIndex: number
  onClickLocation: (venueId: string) => void
}

const List = styled('ul')`
  list-style-type: none;
  margin-bottom: 30px;
`

const ListItem = styled('li')<{ isCurrent: boolean }>`
  background: ${(props) =>
    props.isCurrent ? theme.chocolate.white : 'rgba(255, 255, 255, 0.8)'};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${theme.chocolate.dark};
  cursor: pointer;
  margin-bottom: 5px;
  padding: 10px;

  &:hover {
    background: ${theme.chocolate.white};
  }
`

const LocationsList: FC<Props> = ({
  venue,
  locations,
  tabIndex,
  onClickLocation
}) => (
  <List role="listbox">
    {locations.map((location: Location) => {
      const isCurrent = venue?.id === location.venueId

      return (
        <ListItem
          key={location.venueId}
          aria-selected={isCurrent}
          isCurrent={isCurrent}
          role="option"
          tabIndex={tabIndex}
          onClick={() => onClickLocation(location.venueId)}
        >
          {location.name}
        </ListItem>
      )
    })}
  </List>
)

export default LocationsList
