import { firestore } from 'firebase/app'

import * as Foursquare from 'services/foursquare/models'

export interface Location {
  lat: number
  lng: number
  name: string
  venueId: Foursquare.Venue['id']
  createdAt: firestore.Timestamp | null
  updatedAt: firestore.Timestamp | null
}

export interface Venue extends Foursquare.Venue {
  createdAt: firestore.Timestamp | null
  updatedAt: firestore.Timestamp | null
}
