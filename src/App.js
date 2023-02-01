import { useEffect, useState } from 'react'
import { ButtonGoogle } from './buttonGoogle.js'
import { FcGoogle } from 'react-icons/fc'
import Home from './pages/home.js'

export default function App() {
  const [user, setUser] = useState([])

  useEffect(() => {
    const UserLocal = localStorage.getItem('user')

    setUser(UserLocal)
  }, [])
  return (
    <>
      {user ? (
        <Home />
      ) : (
        <ButtonGoogle>
          <FcGoogle />
          Entrar com o Google
        </ButtonGoogle>
      )}
    </>
  )
}
