import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, object } from '@storybook/addon-knobs'

import LocationsList from './index'
import { Venue } from '../../services/foursquare/models'
import { Location } from '../../services/kyoto-chocolate-map/models'

const venue: Venue = {
  bestPhoto: {
    prefix: 'https://fastly.4sqi.net/img/general/',
    suffix: '/125553_VpimgR41UCPz4d8n_ziOjDiSgWjyEpU6AtY7ypGt1BA.jpg'
  },
  canonicalUrl:
    'https://foursquare.com/v/assemblages-kakimoto/571b2376498ee5843d97343a',
  contact: {
    formattedPhone: '+81 75-202-1351'
  },
  id: '571b2376498ee5843d97343a',
  location: {
    formattedAddress: [
      '松本町587-5 (竹屋町通寺町西入る)',
      '中京区, 京都府',
      '604-0982',
      '日本'
    ]
  },
  name: 'ASSEMBLAGES KAKIMOTO',
  url: 'http://www.assemblages.jp'
}

const locations: Location[] = [
  {
    createdAt: null,
    lat: 35.016144,
    lng: 135.766727,
    name: 'ASSEMBLAGES KAKIMOTO',
    updatedAt: null,
    venueId: '571b2376498ee5843d97343a'
  },
  {
    createdAt: null,
    lat: 35.005126,
    lng: 135.772487,
    name: 'CACAO MARKET by MarieBelle',
    updatedAt: null,
    venueId: '52225c840493f70f68fc7192'
  },
  {
    createdAt: null,
    lat: 34.998879,
    lng: 135.780253,
    name: 'DANDELION CHOCOLATE',
    updatedAt: null,
    venueId: '5af1663c95d986003963c235'
  },
  {
    createdAt: null,
    lat: 35.008554,
    lng: 135.765152,
    name: 'JEAN-PAUL HÉVIN JAPON - Kyoto',
    updatedAt: null,
    venueId: '5811ad8338fafc8715ce5530'
  },
  {
    createdAt: null,
    lat: 35.016019,
    lng: 135.786283,
    name: 'Kyoto Nama Chocolat Organic Tea House',
    updatedAt: null,
    venueId: '4d60c012b19fa143dde9f9c8'
  }
]

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

storiesOf('LocationsList', module)
  .add('default', () => (
    <LocationsList
      venue={null}
      locations={locations.map(location => object(location.name, location))}
      tabIndex={number('tabIndex', 0)}
      onClickLocation={noop}
    />
  ))
  .add('with a venue', () => (
    <LocationsList
      venue={object('venue', venue)}
      locations={locations.map(location => object(location.name, location))}
      tabIndex={number('tabIndex', 0)}
      onClickLocation={noop}
    />
  ))
