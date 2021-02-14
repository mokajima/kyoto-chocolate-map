import React, { FC, useCallback, useState } from 'react'

// view
import App from 'components/App'

const EnhancedApp: FC = () => {
  const [venueId, setVenueId] = useState<string>('')
  const [showSidebar, setShowSidebar] = useState<boolean>(true)

  const onClickLocation = useCallback((id: string) => {
    setVenueId(id)
  }, [])

  const toggleSidebar = useCallback(() => {
    setShowSidebar((v) => !v)
  }, [])

  return (
    <App
      showSidebar={showSidebar}
      venueId={venueId}
      onClickLocation={onClickLocation}
      onToggleSidebar={toggleSidebar}
    />
  )
}

export default EnhancedApp
