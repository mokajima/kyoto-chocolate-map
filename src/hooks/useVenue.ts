import { useContext, useEffect, useRef, useState } from 'react'

// constant
import { collectionName } from 'services/kyoto-chocolate-map/constants'

// context
import { FirebaseContext } from 'contexts'

// model
import { Venue } from 'services/kyoto-chocolate-map/models'

const useVenue = (id: string) => {
  const [venue, setVenue] = useState<Venue | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const firebaseRef = useRef(useContext(FirebaseContext))

  useEffect(() => {
    const { db } = firebaseRef.current

    if (!db) throw new Error('Firestore is not initialized')

    const collection = db.collection(collectionName.venues)

    const load = async () => {
      setIsLoading(true)

      try {
        const doc = await collection.doc(id).get()
        const venueData = doc.data() as Venue
        setVenue(venueData)
        setError(null)
      } catch (err) {
        setError(err)
      }

      setIsLoading(false)
    }

    load()
  }, [id])

  return { venue, isLoading, error }
}

export default useVenue
