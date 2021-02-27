import axios from 'axios'
import { Venue } from './models'

const apiClient = axios.create()

export const createUrl = (
  venueId: string,
  clientId: string,
  clientSecret: string
): string => {
  const params = new URLSearchParams()
  params.set('client_id', clientId)
  params.set('client_secret', clientSecret)
  params.set('lang', 'en')
  params.set('v', '20180813')

  return `https://api.foursquare.com/v2/venues/${venueId}?${params.toString()}`
}

export const getVenue = async (
  venueId: string,
  clientId: string,
  clientSecret: string
): Promise<{ response: { venue: Venue } }> => {
  const url = createUrl(venueId, clientId, clientSecret)
  const { data } = await apiClient.get<{ response: { venue: Venue } }>(url)

  return data
}
