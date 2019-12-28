import * as functions from 'firebase-functions'
import admin from 'firebase-admin'
import { collectionName } from './services/kyoto-chocolate-map/constants'

admin.initializeApp()

export const locations = functions
  .region('us-central1')
  .https.onRequest(async (req, res) => {
    const snap = await admin
      .firestore()
      .collection(collectionName.locations)
      .get()
    const data = snap.docs.map(doc => doc.data())
    res.send({ data })
  })
