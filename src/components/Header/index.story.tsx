/* eslint-disable react/jsx-props-no-spreading */
import { Story } from '@storybook/react/types-6-0'
import React from 'react'

import Header, { Props } from './index'

export default {
  component: Header,
  title: 'Header'
}

const Template: Story<Props> = (args): JSX.Element => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  showTitle: true
}
