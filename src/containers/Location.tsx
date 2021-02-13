import React, { FC } from 'react'

// hook
import useVenue from 'hooks/useVenue'

// view
import Location from 'components/Location'

type Props = {
  venueId: string
}

const EnhancedLocation: FC<Props> = ({ venueId }) => {
  const { venue } = useVenue(venueId)

  if (!venue) {
    return null
  }

  return <Location location={venue} />
}

export default EnhancedLocation
