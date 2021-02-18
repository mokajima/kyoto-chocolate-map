import React, { FC } from 'react'

// model
import { Venue } from 'services/foursquare/models'
import { Location } from 'services/kyoto-chocolate-map/models'

// view
import styles from './index.module.css'

export type Props = {
  venue: Venue | null
  locations: Location[]
  tabIndex: number
  onClickLocation: (venueId: string) => void
}

const LocationsList: FC<Props> = ({
  venue,
  locations,
  tabIndex,
  onClickLocation
}) => (
  <ul className={styles.list} role="listbox">
    {locations.map((location: Location) => {
      const isCurrent = venue?.id === location.venueId

      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <li
          aria-selected={isCurrent}
          className={styles.listItem}
          data-is-current={isCurrent}
          key={location.venueId}
          role="option"
          tabIndex={tabIndex}
          onClick={() => onClickLocation(location.venueId)}
        >
          {location.name}
        </li>
      )
    })}
  </ul>
)

export default LocationsList
