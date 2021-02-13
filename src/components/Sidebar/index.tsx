import React, { FC } from 'react'

// model
import { Venue } from 'services/foursquare/models'
import { Location as LocationType } from 'services/kyoto-chocolate-map/models'

// view
import Logo from 'powered-by-foursquare-white.svg'
import Location from 'containers/Location'
import LocationsList from '../LocationsList'
import Loader from '../Loader'
import styles from './index.module.css'

type Props = {
  venue: Venue | null
  locations: LocationType[]
  isActive: boolean
  isLoading: boolean
  venueId: string
  onClickLocation: (venueId: string) => void
}

const Sidebar: FC<Props> = ({
  isActive,
  isLoading,
  venue,
  locations,
  venueId,
  onClickLocation
}) => (
  <section className={styles.section}>
    <h2 className={styles.title}>Locations</h2>
    <Location venueId={venueId} />
    {isLoading ? (
      <Loader />
    ) : (
      <LocationsList
        venue={venue}
        locations={locations}
        tabIndex={isActive ? 0 : -1}
        onClickLocation={onClickLocation}
      />
    )}
    <div className={styles.attribution}>
      <img src={Logo} alt="POWERED BY FOURSQUARE" />
    </div>
  </section>
)

export default Sidebar
