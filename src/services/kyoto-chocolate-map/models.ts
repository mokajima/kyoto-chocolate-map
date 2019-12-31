import { firestore } from 'firebase/app'

export interface Location {
  lat: number
  lng: number
  name: string
  venueId: string
  createdAt: firestore.Timestamp | null
  updatedAt: firestore.Timestamp | null
}
