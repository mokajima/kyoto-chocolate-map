/* eslint-disable react/jsx-props-no-spreading */
import { Story } from '@storybook/react/types-6-0'
import React from 'react'

import Location, { Props } from './index'
import location from '../../services/foursquare/mocks/venue.json'

export default {
  component: Location,
  title: 'Location'
}

const Template: Story<Props> = (args): JSX.Element => <Location {...args} />

export const Default = Template.bind({})
Default.args = {
  location
}
