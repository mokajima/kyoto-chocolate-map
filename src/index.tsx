import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase/app'
import 'firebase/firestore'

// constant
import firebaseConfig from './firebase-config'

// view
import App from './App'
import FirebaseApp from './FirebaseApp'
import './index.css'

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <FirebaseApp>
    <App />
  </FirebaseApp>,
  document.getElementById('root')
)
