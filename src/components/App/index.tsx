import React, { FC } from 'react'

import { Venue } from 'services/foursquare/models'
import { Location } from 'services/kyoto-chocolate-map/models'

// view
import Header from 'components/Header'
import GoogleMap from 'containers/GoogleMap'
import Sidebar from 'containers/Sidebar'
import styles from './index.module.css'

type Props = {
  isActiveSidebar: boolean
  locations: Location[]
  venue: Venue | null
  venueId: string
  onClickLocation: (venueId: string) => void
  onToggleSidebar: () => void
}

const App: FC<Props> = ({
  isActiveSidebar,
  locations,
  venue,
  venueId,
  onClickLocation,
  onToggleSidebar
}) => (
  <main>
    <div className={styles.content} data-has-margin={isActiveSidebar}>
      <Header
        isActiveSidebar={isActiveSidebar}
        onToggleSidebar={onToggleSidebar}
      />
      <GoogleMap
        locations={locations}
        venue={venue}
        onClickLocation={onClickLocation}
      />
    </div>
    <Sidebar
      isActive={isActiveSidebar}
      venueId={venueId}
      onClickLocation={onClickLocation}
    />
  </main>
)

export default App
