import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle'
import Header from './components/Header/Header'
import Router from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
)
