import React from 'react'
import { object } from '@storybook/addon-knobs'

import Location from './index'
// eslint-disable-next-line jest/no-mocks-import
import location from '../../services/foursquare/__mocks__/venue.json'

export default {
  component: Location,
  title: 'Location'
}

export const Default = (): JSX.Element => (
  <Location location={object('location', location)} />
)
