import React, { FC } from 'react'

// hook
import useLocations from 'hooks/useLocations'
import useVenue from 'hooks/useVenue'

// view
import Sidebar from 'components/Sidebar'

type Props = {
  isActive: boolean
  venueId: string
  onClickLocation: (venueId: string) => void
}

const EnhancedSidebar: FC<Props> = ({ isActive, venueId, onClickLocation }) => {
  const { isLoading, locations } = useLocations()
  const { venue } = useVenue(venueId)

  return (
    <Sidebar
      isActive={isActive}
      isLoading={isLoading}
      locations={locations}
      venue={venue}
      onClickLocation={onClickLocation}
    />
  )
}

export default EnhancedSidebar
