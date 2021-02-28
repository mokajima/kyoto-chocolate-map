import MockAdapter from 'axios-mock-adapter'

import { apiClient, createUrl, getVenue } from './api'
import venue from './mocks/venue.json'

const CLIENT_ID = process.env.REACT_APP_FOURSQUARE_CLIENT_ID || ''
const CLIENT_SECRET = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET || ''
const url = createUrl(venue.id, CLIENT_ID, CLIENT_SECRET)

describe('Foursquare API handlers', () => {
  const mock = new MockAdapter(apiClient)

  afterEach(() => {
    mock.reset()
  })

  it('Getting a venue', async () => {
    mock.onGet(url).reply(200, JSON.stringify({ response: { venue } }))

    const data = await getVenue(venue.id, CLIENT_ID, CLIENT_SECRET)

    expect(data.response.venue.canonicalUrl).toBe(venue.canonicalUrl)
    expect(data.response.venue.id).toBe(venue.id)
    expect(data.response.venue.name).toBe(venue.name)
  })
})
