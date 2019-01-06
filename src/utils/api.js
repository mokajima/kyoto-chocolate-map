export const getLocations = () =>
  fetch('locations.json')
    .then(res => res.json())
    .then(data => data.shops)
