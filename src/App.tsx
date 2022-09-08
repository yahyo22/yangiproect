import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './assets/style/GlobalStyle'
import { BrowserRouter } from "react-router-dom";
import Router from './router/Router';

export default function App() {
  return (
    <StyledApp>
      <BrowserRouter>
      <GlobalStyle/>
      <Router/>
      </BrowserRouter>

    </StyledApp>
  )
}
const StyledApp = styled.div`
  
`
