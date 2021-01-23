import { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const loadGoogleMapsApi = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=onLoadGoogleMapsApi`
    // eslint-disable-next-line no-unused-expressions
    document.querySelector('head')?.appendChild(script)

    window.onLoadGoogleMapsApi = () => {
      resolve(window.google)
    }

    // Listen for authentication errors
    // eslint-disable-next-line camelcase
    window.gm_authFailure = () => {
      // eslint-disable-next-line no-alert
      alert("We couldn't get data from Google Maps")
    }
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useGoogle = (): any => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
  const [google, setGoogle] = useState<any>(null)

  useEffect(() => {
    loadGoogleMapsApi().then((v) => setGoogle(v))
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return google
}

export default useGoogle
