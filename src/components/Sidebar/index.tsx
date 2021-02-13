import React, { FC } from 'react'

// view
import Logo from 'powered-by-foursquare-white.svg'
import Location from 'containers/Location'
import LocationsList from 'containers/LocationsList'
import styles from './index.module.css'

type Props = {
  isActive: boolean
  venueId: string
  onClickLocation: (venueId: string) => void
}

const Sidebar: FC<Props> = ({ isActive, venueId, onClickLocation }) => (
  <section className={styles.section}>
    <h2 className={styles.title}>Locations</h2>
    <Location venueId={venueId} />
    <LocationsList
      venueId={venueId}
      tabIndex={isActive ? 0 : -1}
      onClickLocation={onClickLocation}
    />
    <div className={styles.attribution}>
      <img src={Logo} alt="POWERED BY FOURSQUARE" />
    </div>
  </section>
)

export default Sidebar
