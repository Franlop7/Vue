import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA_8zndltr8t3E-NfGzru8vLswR_NFjWms',
  authDomain: 'chatvuetify-81325.firebaseapp.com',
  projectId: 'chatvuetify-81325',
  storageBucket: 'chatvuetify-81325.appspot.com',
  messagingSenderId: '93115705009',
  appId: '1:93115705009:web:bea7c656ba21cdc1352490'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
