import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/components/app';
import { allOffers, favoriteOffers } from '@/mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={allOffers} favoriteOffers={favoriteOffers}/>
  </React.StrictMode>
);
