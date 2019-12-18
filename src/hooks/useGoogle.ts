import { useCallback, useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_API_KEY

const useGoogle = () => {
  const [google, setGoogle] = useState<any>(null)

  const loadGoogleMapsApi = useCallback(() => {
    return new Promise(resolve => {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=onLoadGoogleMapsApi`
      document.querySelector('head')?.appendChild(script)

      window.onLoadGoogleMapsApi = () => {
        resolve(window.google)
      }

      // Listen for authentication errors
      // eslint-disable-next-line camelcase
      window.gm_authFailure = () => {
        // eslint-disable-next-line no-alert
        alert('We couldn\'t get data from Google Maps')
      }
    })
  }, [])

  useEffect(() => {
    loadGoogleMapsApi().then(v => setGoogle(v))
  }, [loadGoogleMapsApi])

  return google
}

export default useGoogle
