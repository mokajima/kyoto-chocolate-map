import React, { FC } from 'react'

import { Venue } from 'services/foursquare/models'
import { Location } from 'services/kyoto-chocolate-map/models'

// view
import GoogleMap from 'containers/GoogleMap'
import Sidebar from 'components/Sidebar'
import styles from './index.module.css'

type Props = {
  isActiveSidebar: boolean
  isLoading: boolean
  locations: Location[]
  venue: Venue | null
  onClickLocation: (venueId: string) => void
  onToggleSidebar: () => void
}

const App: FC<Props> = ({
  isActiveSidebar,
  isLoading,
  locations,
  venue,
  onClickLocation,
  onToggleSidebar
}) => (
  <main>
    <div className={styles.content} data-has-margin={isActiveSidebar}>
      <header className={styles.header}>
        <h1 className={styles.title} data-is-shown={!isActiveSidebar}>
          Kyoto Chocolate Map
        </h1>
        <button
          className={styles.button}
          type="button"
          onClick={onToggleSidebar}
        >
          <span>Hide Navigation</span>
        </button>
      </header>
      <GoogleMap
        locations={locations}
        venue={venue}
        onClickLocation={onClickLocation}
      />
    </div>
    <Sidebar
      venue={venue}
      isActive={isActiveSidebar}
      isLoading={isLoading}
      locations={locations}
      onClickLocation={onClickLocation}
    />
  </main>
)

export default App
