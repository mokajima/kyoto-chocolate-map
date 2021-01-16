/// <reference types="react-scripts" />
interface Window {
  google: any // eslint-disable-line @typescript-eslint/no-explicit-any
  gm_authFailure: () => void // eslint-disable-line camelcase
  onLoadGoogleMapsApi: () => void
}
