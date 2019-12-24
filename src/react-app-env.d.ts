/// <reference types="react-scripts" />
interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  google: any
  gm_authFailure: () => void
  onLoadGoogleMapsApi: () => void
}
