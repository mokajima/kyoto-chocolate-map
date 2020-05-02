import React from 'react'

import Loader from './index'
import theme from '../../theme'

export default {
  component: Loader,
  parameters: {
    backgrounds: [
      {
        name: 'milk',
        value: theme.chocolate.milk,
        default: true
      }
    ]
  },
  title: 'Loader'
}

export const Default = () => <Loader />
