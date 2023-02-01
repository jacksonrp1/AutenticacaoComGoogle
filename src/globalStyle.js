import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    list-style: none; 
  }
  #root{
    height: 100vh;
    background-color: #f2f2f2;
    display:flex;
    align-items: center;
    justify-content: center;
  }
`
