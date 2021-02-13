import React, { FC } from 'react'

// view
import Header from 'components/Header'
import GoogleMap from 'containers/GoogleMap'
import Sidebar from 'containers/Sidebar'
import styles from './index.module.css'

type Props = {
  isActiveSidebar: boolean
  venueId: string
  onClickLocation: (venueId: string) => void
  onToggleSidebar: () => void
}

const App: FC<Props> = ({
  isActiveSidebar,
  venueId,
  onClickLocation,
  onToggleSidebar
}) => (
  <main>
    <div className={styles.content} data-has-margin={isActiveSidebar}>
      <Header
        showTitle={!isActiveSidebar}
        onToggleSidebar={onToggleSidebar}
      />
      <GoogleMap venueId={venueId} onClickLocation={onClickLocation} />
    </div>
    <Sidebar
      isActive={isActiveSidebar}
      venueId={venueId}
      onClickLocation={onClickLocation}
    />
  </main>
)

export default App
