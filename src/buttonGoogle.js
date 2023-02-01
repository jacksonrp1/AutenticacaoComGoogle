import styled from 'styled-components'
import { useState } from 'react'
import { provider, auth, signInWithPopup } from './service/firebase.js'
import Home from './pages/home.js'

export function ButtonGoogle({ children }) {
  const [value, setValue] = useState('')

  const handleLoginGoogle = () => {
    signInWithPopup(auth, provider).then(data => {
      setValue(data)
      const dados = JSON.stringify({
        nome: data.user.displayName,
        photo: data.user.photoURL,
        id: data.user.uid
      })
      localStorage.setItem('user', dados)
    })
  }

  return (
    <div>
      {value ? (
        <Home />
      ) : (
        <BtnGoogle onClick={handleLoginGoogle}>{children}</BtnGoogle>
      )}
    </div>
  )
}

export const BtnGoogle = styled.button`
  width: 250px;
  display: flex;
  background-color: #ffffff;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  padding: 10px;
  border-radius: 5px;
  border: solid 1px hsl(210, 8%, 85%);
  transition: 0.5s ease-in-out;
  font-weight: 700;
  &:hover {
    background-color: #fafafa;
  }
  svg {
    height: 18px;
    width: 18px;
  }
`
