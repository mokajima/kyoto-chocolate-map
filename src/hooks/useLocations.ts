import { useCallback, useContext, useRef } from 'react'
import { useQuery } from 'react-query'

// constant
import { collectionName } from 'services/kyoto-chocolate-map/constants'

// context
import { FirebaseContext } from 'contexts'

// model
import { Location } from 'services/kyoto-chocolate-map/models'

const QUERY_KEY = 'locations'

const useLocations = (): {
  error: Error | null
  isLoading: boolean
  locations: Location[]
} => {
  const firebaseRef = useRef(useContext(FirebaseContext))

  const getLocations = useCallback(async () => {
    const { db } = firebaseRef.current

    if (!db) throw new Error('Firestore is not initialized')

    const query = db.collection(collectionName.locations).orderBy('name', 'asc')
    const snap = await query.get()

    return snap.docs.map((doc) => ({
      ...(doc.data() as Location)
    }))
  }, [])

  const { data: locations = [], error, isLoading } = useQuery<
    Location[],
    Error
  >(QUERY_KEY, getLocations)

  return { locations, isLoading, error }
}

export default useLocations
