import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/pages/main/main';
import Login from '@/pages/login/login';
import Favorites from '@/pages/favorites/favorites';
import Offer from '@/pages/offer/offer';
import { Error404 } from '@/pages/errors/errors';
import AuthChecker from '@/components/auth-checker/auth-checker';
import { OfferEntity } from '@/types/offer/offer';

type AppProps = {
  offers: OfferEntity[];
  favoriteOffers: OfferEntity[];
};

function App({ offers, favoriteOffers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main offers={offers} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/favorites"
          element={
            <AuthChecker element={<Favorites offers={favoriteOffers}/>} isAuthorized></AuthChecker>
          }
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
