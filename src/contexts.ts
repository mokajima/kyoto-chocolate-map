import { createContext } from 'react'
import firebase from 'firebase/app'

interface FirebaseContextValue {
  db: firebase.firestore.Firestore | null
}

export const FirebaseContext = createContext<FirebaseContextValue>({
  db: null
})
