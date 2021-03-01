import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import firebase from 'firebase/app'
import 'firebase/firestore'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'

// constant
import firebaseConfig from './firebase-config'

// view
import App from './containers/App'
import FirebaseApp from './FirebaseApp'
import './index.css'

const queryClient = new QueryClient()

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <FirebaseApp>
      <App />
    </FirebaseApp>
  </QueryClientProvider>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()
