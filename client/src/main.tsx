import { BrowserRouter } from 'react-router-dom';
import { setFavicon } from './setFavicon';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import React from 'react';
import './index.scss';

setFavicon();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
