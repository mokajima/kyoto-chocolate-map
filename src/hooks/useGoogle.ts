import { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const loadGoogleMapsApi = () => {
  return new Promise(resolve => {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=onLoadGoogleMapsApi`
    // eslint-disable-next-line no-unused-expressions
    document.querySelector('head')?.appendChild(script)

    window.onLoadGoogleMapsApi = () => {
      resolve(window.google)
    }

    // Listen for authentication errors
    // eslint-disable-next-line @typescript-eslint/camelcase
    window.gm_authFailure = () => {
      // eslint-disable-next-line no-alert
      alert("We couldn't get data from Google Maps")
    }
  })
}

const useGoogle = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [google, setGoogle] = useState<any>(null)

  useEffect(() => {
    loadGoogleMapsApi().then(v => setGoogle(v))
  }, [])

  return google
}

export default useGoogle
