import axios from 'axios'
import { Venue } from './models'

const apiClient = axios.create()

export const getVenue = async (
  venueId: string,
  clientId: string,
  clientSecret: string
): Promise<{ response: { venue: Venue } }> => {
  const params = new URLSearchParams()
  params.set('client_id', clientId)
  params.set('client_secret', clientSecret)
  params.set('lang', 'en')
  params.set('v', '20180813')

  const url = `https://api.foursquare.com/v2/venues/${venueId}?${params.toString()}`
  const { data } = await apiClient.get<{ response: { venue: Venue } }>(url)

  return data
}
