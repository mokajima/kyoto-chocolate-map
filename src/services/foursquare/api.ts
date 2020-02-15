import axios from 'axios'

const CLIENT_ID = process.env.REACT_APP_FOURSQUARE_CLIENT_ID || ''
const CLIENT_SECRET = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET || ''

const apiClient = axios.create()

export const getVenue = async (venueId: string) => {
  const params = new URLSearchParams()
  params.set('client_id', CLIENT_ID)
  params.set('client_secret', CLIENT_SECRET)
  params.set('lang', 'en')
  params.set('v', '20180813')

  const url = `https://api.foursquare.com/v2/venues/${venueId}?${params.toString()}`
  const { data } = await apiClient.get(url)

  return data
}
