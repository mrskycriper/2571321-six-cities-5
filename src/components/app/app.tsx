import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '@/pages/main';
import { Login } from '@/pages/login';
import { Favorites } from '@/pages/favorites';
import { Offer } from '@/pages/offer';
import { Error404 } from '@/pages/errors';
import { AuthChecker } from '@/components/auth-checker';
import { OfferEntity } from '@/entities/offer';

type AppProps = {
  offers: OfferEntity[];
};

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main offers={offers} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/favorites"
          element={
            <AuthChecker element={<Favorites />} isAuthorized={true}></AuthChecker>
          }
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
