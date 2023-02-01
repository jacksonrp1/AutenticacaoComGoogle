import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBhQ4-MGEOLr8JYGS7UcJCsH6qQBSOY8NQ',
  authDomain: 'projetologincom.firebaseapp.com',
  projectId: 'projetologincom',
  storageBucket: 'projetologincom.appspot.com',
  messagingSenderId: '203896483733',
  appId: '1:203896483733:web:c4b165f3ea7cb7a7c4509c'
}
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export { provider, app, auth, signInWithPopup }
