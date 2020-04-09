import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { getVenue } from './api'

const CLIENT_ID = process.env.REACT_APP_FOURSQUARE_CLIENT_ID || ''
const CLIENT_SECRET = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET || ''

const venue = {
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

const venueId = '571b2376498ee5843d97343a'

const url = `https://api.foursquare.com/v2/venues/${venueId}`

describe('Foursquare API handlers', () => {
  const mock = new MockAdapter(axios)

  afterEach(() => {
    mock.reset()
  })

  it('Getting a venue', async () => {
    mock.onGet(url).reply(200, JSON.stringify({ response: { venue } }))

    const data = await getVenue(venueId, CLIENT_ID, CLIENT_SECRET)

    expect(data.response.venue.canonicalUrl).toBe(venue.canonicalUrl)
    expect(data.response.venue.id).toBe(venue.id)
    expect(data.response.venue.name).toBe(venue.name)
  })
})
