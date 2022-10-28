import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { FontStyles } from './components/GlobalStyle/FontStyles';
import Header from './components/Header/Header';
import Router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FontStyles />
      <GlobalStyle />
      <Header />
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
);
