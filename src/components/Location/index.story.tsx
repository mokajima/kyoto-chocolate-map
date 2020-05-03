import React from 'react'
import { object } from '@storybook/addon-knobs'

import Location from './index'
import location from '../../services/foursquare/__mocks__/venue.json'

export default {
  component: Location,
  title: 'Location'
}

export const Default = () => (
  <Location location={object('location', location)} />
)
