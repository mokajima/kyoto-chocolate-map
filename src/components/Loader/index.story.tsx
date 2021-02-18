import React from 'react'

import Loader from './index'
import theme from '../../theme'

export default {
  component: Loader,
  parameters: {
    backgrounds: {
      default: 'milk',
      values: [{ name: 'milk', value: theme.chocolate.milk }]
    }
  },
  title: 'Loader'
}

export const Default = (): JSX.Element => <Loader />
