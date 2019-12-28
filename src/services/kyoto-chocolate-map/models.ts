import { firestore } from 'firebase/app'

export interface Location {
  lat: number
  lng: number
  name: string
  venueId: string
  createdAt: firestore.Timestamp | null
  updatedAt: firestore.Timestamp | null
}

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
