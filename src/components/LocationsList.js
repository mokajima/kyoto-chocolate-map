import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const List = styled.ul`
  list-style-type: none;
  margin-bottom: 30px;
`

const ListItem = styled.li`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  box-sizing: border-box;
  color: #6b5344;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 10px;
  &:hover {
    background: #f5efde;
  }
  ${props => props.isCurrent && css`
    background: #f5efde;
  `}
`

const LocationsList = ({
  currentLocation,
  isActiveSidebar,
  locations,
  updateCurrentLocation
}) => {
  const tabIndex = isActiveSidebar ? 0 : -1

  return (
    <List role="listbox">
      {locations.map(location => {
        const isCurrent =
          currentLocation &&
          currentLocation.id === location.venueId

        return (
          <ListItem
            key={location.venueId}
            aria-selected={isCurrent}
            isCurrent={isCurrent}
            role="option"
            tabIndex={tabIndex}
            onClick={() => updateCurrentLocation(location.venueId)}
          >
            {location.name}
          </ListItem>
        )
      })}
    </List>
  )
}

LocationsList.propTypes = {
  currentLocation: PropTypes.oneOfType([PropTypes.object.isRequired, null]),
  locations: PropTypes.array.isRequired,
  updateCurrentLocation: PropTypes.func.isRequired,
  isActiveSidebar: PropTypes.bool.isRequired
}

export default LocationsList
