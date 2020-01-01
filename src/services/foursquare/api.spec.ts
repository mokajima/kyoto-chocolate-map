import { getVenue } from './api'

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

describe('Foursquare API handlers', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('Getting a venue', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ response: { venue } }))

    const data = await getVenue('571b2376498ee5843d97343a')

    expect(data.response.venue.canonicalUrl).toEqual(venue.canonicalUrl)
    expect(data.response.venue.id).toEqual(venue.id)
    expect(data.response.venue.name).toEqual(venue.name)
  })
})
