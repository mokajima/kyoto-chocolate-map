import commander from 'commander'
import admin from 'firebase-admin'
import fs from 'fs'
import parse from 'csv-parse/lib/sync'

import { Location } from '../services/kyoto-chocolate-map/models'
import { collectionName } from '../services/kyoto-chocolate-map/constants'
import serviceAccount from '../kyoto-chocolate-map-firebase-adminsdk.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
})

const db = admin.firestore()

const uploadSeed = async (collection: string, seedFile: string) => {
  const buffer = fs.readFileSync(seedFile)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const records = parse(buffer.toString(), {
    columns: true,
    delimiter: '\t',
    skip_empty_lines: true // eslint-disable-line camelcase
  })
  const ref = db.collection(collection)

  switch (collection) {
    case collectionName.locations: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const docs = records.map((record: Location) => ({
        ...record,
        lat: parseFloat((record.lat as unknown) as string),
        lng: parseFloat((record.lng as unknown) as string),
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      }))

      for await (const doc of docs) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        await ref.doc(doc.venueId).set(doc)
      }

      break
    }

    default: {
      throw new Error('specify target collection')
    }
  }
}

commander
  .version('0.1.0', '-v, --version')
  .arguments('<collection> <seedFile>')
  .action(
    (collection: string, seedFile: string) =>
      // eslint-disable-next-line no-void
      void uploadSeed(collection, seedFile)
  )

commander.parse(process.argv)
