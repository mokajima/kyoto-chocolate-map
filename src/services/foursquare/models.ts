export interface Venue {
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

interface BestPhoto {
  prefix: string
  suffix: string
}

interface Contact {
  formattedPhone: string
}
