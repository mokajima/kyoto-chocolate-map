import React, { FC, Suspense, lazy } from 'react'

// view
import Logo from 'powered-by-foursquare-white.svg'
import LocationsList from 'containers/LocationsList'
import styles from './index.module.css'

type Props = {
  isShown: boolean
  venueId: string
  onClickLocation: (venueId: string) => void
}

const Location = lazy(() => import('containers/Location'))

const Sidebar: FC<Props> = ({ isShown, venueId, onClickLocation }) => (
  <section className={styles.section}>
    <h2 className={styles.title}>Locations</h2>
    <Suspense fallback={null}>
      <Location venueId={venueId} />
    </Suspense>
    <LocationsList
      venueId={venueId}
      tabIndex={isShown ? 0 : -1}
      onClickLocation={onClickLocation}
    />
    <div className={styles.attribution}>
      <img src={Logo} alt="POWERED BY FOURSQUARE" width={210} height={13} />
    </div>
  </section>
)

export default Sidebar
