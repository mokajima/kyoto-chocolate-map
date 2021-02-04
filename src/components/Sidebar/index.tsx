import React, { FC } from 'react'

// model
import { Venue } from 'services/foursquare/models'
import { Location as LocationType } from 'services/kyoto-chocolate-map/models'

// view
import Logo from 'powered-by-foursquare-white.svg'
import LocationsList from '../LocationsList'
import Location from '../Location'
import Loader from '../Loader'
import styles from './index.module.css'

type Props = {
  venue: Venue | null
  locations: LocationType[]
  isActive: boolean
  isLoading: boolean
  onClickLocation: (venueId: string) => void
}

const Sidebar: FC<Props> = ({
  isActive,
  isLoading,
  venue,
  locations,
  onClickLocation
}) => (
  <section className={styles.section}>
    <h2 className={styles.title}>Locations</h2>
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
    <div className={styles.attribution}>
      <img src={Logo} alt="POWERED BY FOURSQUARE" />
    </div>
  </section>
)

export default Sidebar
