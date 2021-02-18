/* eslint-disable react/jsx-props-no-spreading */
import { Story } from '@storybook/react/types-6-0'
import React from 'react'

import Location, { Props } from './index'
// eslint-disable-next-line jest/no-mocks-import
import location from '../../services/foursquare/__mocks__/venue.json'

export default {
  component: Location,
  title: 'Location'
}

const Template: Story<Props> = (args): JSX.Element => <Location {...args} />

export const Default = Template.bind({})
Default.args = {
  location
}
