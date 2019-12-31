const CLIENT_ID = process.env.REACT_APP_FOURSQUARE_CLIENT_ID || ''
const CLIENT_SECRET = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET || ''

export const getVenue = async (venueId: string) => {
  const params = new URLSearchParams()
  params.set('client_id', CLIENT_ID)
  params.set('client_secret', CLIENT_SECRET)
  params.set('lang', 'en')
  params.set('v', '20180813')

  const url = `https://api.foursquare.com/v2/venues/${venueId}?${params.toString()}`
  const res = await fetch(url)
  const data = await res.json()

  return data
}
