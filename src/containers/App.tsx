import React, { FC, useCallback, useState } from 'react'

// hook
import useLocations from 'hooks/useLocations'
import useVenue from 'hooks/useVenue'

// view
import App from 'components/App'

const EnhancedApp: FC = () => {
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
    <App
      isActiveSidebar={isActiveSidebar}
      isLoading={isLoading}
      locations={locations}
      venue={venue}
      onClickLocation={onClickLocation}
      onToggleSidebar={toggleSidebar}
    />
  )
}

export default EnhancedApp
