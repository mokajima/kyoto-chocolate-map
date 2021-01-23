import * as functions from 'firebase-functions'
import admin from 'firebase-admin'

import { getVenue } from './services/foursquare/api'
import { Venue } from './services/foursquare/models'
import { collectionName } from './services/kyoto-chocolate-map/constants'
import { Location } from './services/kyoto-chocolate-map/models'

admin.initializeApp()

// eslint-disable-next-line camelcase, @typescript-eslint/no-unsafe-assignment
const { client_id, client_secret } = functions.config().foursquare

const createVenue = async (db: admin.firestore.Firestore, venue: Venue) => {
  const venuesRef = db.collection(collectionName.venues)

  await venuesRef.doc(venue.id).set({
    ...venue,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  })
}

export const registerVenues = functions
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  .region(functions.config().locale.region)
  .pubsub.schedule('0 0 1 * *')
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  .timeZone(functions.config().locale.timezone)
  .onRun(async () => {
    const db = admin.firestore()
    const snap = await admin
      .firestore()
      .collection(collectionName.locations)
      .get()

    for await (const doc of snap.docs) {
      const { venueId } = doc.data() as Location
      const data = await getVenue(venueId, client_id, client_secret)
      await createVenue(db, data.response.venue)
    }
  })
