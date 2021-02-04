import React, { FC, useCallback, useState } from 'react'

// hook
import useLocations from 'hooks/useLocations'
import useVenue from 'hooks/useVenue'

// view
import GoogleMap from 'containers/GoogleMap'
import Sidebar from 'components/Sidebar'
import styles from './App.module.css'

const App: FC = () => {
  const [venueId, setVenueId] = useState<string>('')
  const [isActiveSidebar, setIsActiveSidebar] = useState<boolean>(true)

  const { venue } = useVenue(venueId)
  const { isLoading, locations } = useLocations()

  const onClickLocation = useCallback((id: string) => {
    setVenueId(id)
  }, [])

  const toggleSidebar = useCallback(() => {
    setIsActiveSidebar((v) => !v)
  }, [])

  return (
    <main>
      <div className={styles.content} data-has-margin={isActiveSidebar}>
        <header className={styles.header}>
          <h1 className={styles.title} data-is-shown={!isActiveSidebar}>
            Kyoto Chocolate Map
          </h1>
          <button
            className={styles.button}
            type="button"
            onClick={toggleSidebar}
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
}

export default App
