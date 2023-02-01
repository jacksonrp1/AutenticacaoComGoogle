import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCZfR-W5kL801E6Cwaey-GjxXCZBlVieXk',
  authDomain: 'teste-66d36.firebaseapp.com',
  projectId: 'teste-66d36',
  storageBucket: 'teste-66d36.appspot.com',
  messagingSenderId: '616727271116',
  appId: '1:616727271116:web:9e331ead346bbd2df09469'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export { provider, app, auth, signInWithPopup }
