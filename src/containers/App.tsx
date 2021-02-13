import React, { FC, useCallback, useState } from 'react'

// view
import App from 'components/App'

const EnhancedApp: FC = () => {
  const [venueId, setVenueId] = useState<string>('')
  const [isActiveSidebar, setIsActiveSidebar] = useState<boolean>(true)

  const onClickLocation = useCallback((id: string) => {
    setVenueId(id)
  }, [])

  const toggleSidebar = useCallback(() => {
    setIsActiveSidebar((v) => !v)
  }, [])

  return (
    <App
      isActiveSidebar={isActiveSidebar}
      venueId={venueId}
      onClickLocation={onClickLocation}
      onToggleSidebar={toggleSidebar}
    />
  )
}

export default EnhancedApp
