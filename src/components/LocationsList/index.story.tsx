import React from 'react'
import { number, object } from '@storybook/addon-knobs'

import LocationsList from './index'
import venue from '../../services/foursquare/__mocks__/venue.json'
import locations from '../../services/kyoto-chocolate-map/__mocks__/locations.json'
import theme from '../../theme'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

export default {
  component: LocationsList,
  parameters: {
    backgrounds: [
      {
        name: 'milk',
        value: theme.chocolate.milk,
        default: true
      }
    ]
  },
  title: 'LocationsList'
}

export const Default = (): JSX.Element => (
  <LocationsList
    venue={null}
    locations={locations.map((location) => object(location.name, location))}
    tabIndex={number('tabIndex', 0)}
    onClickLocation={noop}
  />
)

export const WithVenue: React.FC = () => (
  <LocationsList
    venue={object('venue', venue)}
    locations={locations.map((location) => object(location.name, location))}
    tabIndex={number('tabIndex', 0)}
    onClickLocation={noop}
  />
)
