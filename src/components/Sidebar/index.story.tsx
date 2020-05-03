import React from 'react'
import { object } from '@storybook/addon-knobs'

import Sidebar from './index'
import venue from '../../services/foursquare/__mocks__/venue.json'
import locations from '../../services/kyoto-chocolate-map/__mocks__/locations.json'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

export default {
  component: Sidebar,
  title: 'Sidebar'
}

export const Default = () => (
  <Sidebar
    venue={venue}
    locations={locations.map(location => object(location.name, location))}
    isActive
    isLoading={false}
    onClickLocation={noop}
  />
)
