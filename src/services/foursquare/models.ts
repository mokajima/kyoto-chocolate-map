export type Venue = {
  bestPhoto?: BestPhoto
  canonicalUrl: string
  contact?: Contact
  id: string
  location: {
    formattedAddress: string[]
  }
  name: string
  url?: string
}

type BestPhoto = {
  prefix: string
  suffix: string
}

type Contact = {
  formattedPhone: string
}
