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
  const { locations } = useLocations()

  const onClickLocation = useCallback((id: string) => {
    setVenueId(id)
  }, [])

  const toggleSidebar = useCallback(() => {
    setIsActiveSidebar((v) => !v)
  }, [])

  return (
    <App
      isActiveSidebar={isActiveSidebar}
      locations={locations}
      venue={venue}
      venueId={venueId}
      onClickLocation={onClickLocation}
      onToggleSidebar={toggleSidebar}
    />
  )
}

export default EnhancedApp
