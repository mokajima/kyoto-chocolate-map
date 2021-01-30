import { useContext, useEffect, useRef, useState } from 'react'

// constant
import { collectionName } from 'services/kyoto-chocolate-map/constants'

// context
import { FirebaseContext } from 'contexts'

// model
import { Location } from 'services/kyoto-chocolate-map/models'

const useLocations = (): {
  error: Error | null
  isLoading: boolean
  locations: Location[]
} => {
  const [locations, setLocations] = useState<Location[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const firebaseRef = useRef(useContext(FirebaseContext))

  useEffect(() => {
    const { db } = firebaseRef.current

    if (!db) throw new Error('Firestore is not initialized')

    const query = db.collection(collectionName.locations).orderBy('name', 'asc')

    const load = async () => {
      setIsLoading(true)

      try {
        const snap = await query.get()
        const locationsData = snap.docs.map((doc) => ({
          ...(doc.data() as Location)
        }))
        setLocations(locationsData)
        setError(null)
      } catch (err) {
        setError(err)
      }

      setIsLoading(false)
    }

    void load()
  }, [])

  return { locations, isLoading, error }
}

export default useLocations
