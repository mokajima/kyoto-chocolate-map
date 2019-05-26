export const getLocations = () =>
  fetch('locations.json')
    .then(res => res.json())
