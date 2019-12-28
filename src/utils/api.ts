export const getLocations = () =>
  fetch('locations.json').then(res => res.json())

export const getVenue = (venueId: string) =>
  fetch(
    `https://api.foursquare.com/v2/venues/${venueId}?client_id=${process.env.REACT_APP_FOURSQUARE_CLIENT_ID}&client_secret=${process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET}&v=20180813&lang=en`
  ).then(res => res.json())
