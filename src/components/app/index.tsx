import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Main from '@/pages/main';
import Login from '@/pages/login';
import Favorites from '@/pages/favorites';
import Offer from '@/pages/offer';
import { Error404 } from '@/pages/errors';
import AuthChecker from '@/components/auth-checker';
import { OfferShort } from '@/types/offer';

type AppProps = {
  favoriteOffers: OfferShort[];
};

function App({ favoriteOffers }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/favorites"
            element={
              <AuthChecker
                element={<Favorites offers={favoriteOffers} />}
                isAuthorized
              />
            }
          />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
