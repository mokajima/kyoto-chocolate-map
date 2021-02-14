import React, { FC } from 'react'

// view
import Header from 'components/Header'
import GoogleMap from 'containers/GoogleMap'
import Sidebar from 'components/Sidebar'
import styles from './index.module.css'

type Props = {
  showSidebar: boolean
  venueId: string
  onClickLocation: (venueId: string) => void
  onToggleSidebar: () => void
}

const App: FC<Props> = ({
  showSidebar,
  venueId,
  onClickLocation,
  onToggleSidebar
}) => (
  <main>
    <div className={styles.content} data-has-margin={showSidebar}>
      <Header showTitle={!showSidebar} onClickButton={onToggleSidebar} />
      <GoogleMap venueId={venueId} onClickLocation={onClickLocation} />
    </div>
    <Sidebar
      isShown={showSidebar}
      venueId={venueId}
      onClickLocation={onClickLocation}
    />
  </main>
)

export default App
