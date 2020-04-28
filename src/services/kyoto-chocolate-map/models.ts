import { firestore } from 'firebase/app'

import * as Foursquare from 'services/foursquare/models'

export type Location = {
  lat: number
  lng: number
  name: string
  venueId: Foursquare.Venue['id']
  createdAt: firestore.Timestamp | null
  updatedAt: firestore.Timestamp | null
}

export type Venue = Foursquare.Venue & {
  createdAt: firestore.Timestamp | null
  updatedAt: firestore.Timestamp | null
}
