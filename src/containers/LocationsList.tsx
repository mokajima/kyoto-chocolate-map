import React, { FC } from 'react'

// hook
import useLocations from 'hooks/useLocations'
import useVenue from 'hooks/useVenue'

// view
import Loader from 'components/Loader'
import LocationsList from 'components/LocationsList'

type Props = {
  tabIndex: number
  venueId: string
  onClickLocation: (venueId: string) => void
}

const EnhancedLocationsList: FC<Props> = ({
  tabIndex,
  venueId,
  onClickLocation
}) => {
  const { isLoading, locations } = useLocations()
  const { venue } = useVenue(venueId)

  if (isLoading) {
    return <Loader />
  }

  return (
    <LocationsList
      locations={locations}
      tabIndex={tabIndex}
      venue={venue}
      onClickLocation={onClickLocation}
    />
  )
}

export default EnhancedLocationsList
