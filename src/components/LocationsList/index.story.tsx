/* eslint-disable react/jsx-props-no-spreading */
import { Story } from '@storybook/react/types-6-0'
import React from 'react'

import LocationsList, { Props } from './index'
import venue from '../../services/foursquare/mocks/venue.json'
import locations from '../../services/kyoto-chocolate-map/mocks/locations.json'
import theme from '../../theme'

export default {
  component: LocationsList,
  parameters: {
    backgrounds: {
      default: 'milk',
      values: [{ name: 'milk', value: theme.chocolate.milk }]
    }
  },
  title: 'LocationsList'
}

const Template: Story<Props> = (args): JSX.Element => (
  <LocationsList {...args} />
)

export const Default = Template.bind({})
Default.args = {
  locations,
  tabIndex: 0,
  venue: null
}

export const WithVenue = Template.bind({})
WithVenue.args = {
  locations,
  tabIndex: 0,
  venue
}
