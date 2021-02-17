import { useCallback, useContext, useRef } from 'react'
import { useQuery } from 'react-query'

// constant
import { collectionName } from 'services/kyoto-chocolate-map/constants'

// context
import { FirebaseContext } from 'contexts'

// model
import { Venue } from 'services/kyoto-chocolate-map/models'

const useVenue = (
  id: string
): { error: Error | null; isLoading: boolean; venue: Venue | null } => {
  const firebaseRef = useRef(useContext(FirebaseContext))

  const getVenue = useCallback(async () => {
    const { db } = firebaseRef.current

    if (!db) throw new Error('Firestore is not initialized')

    const doc = await db.collection(collectionName.venues).doc(id).get()

    return doc.data() as Venue
  }, [id])

  const { data: venue = null, error, isLoading } = useQuery<Venue, Error>(
    ['venue', id],
    getVenue
  )

  return { venue, isLoading, error }
}

export default useVenue
