import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PlaceCardEntity } from '../../components/place-card/entities/interfaces';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import Error404 from '../../pages/error/404/404';
import AuthChecker from '../auth-checker/auth-checker';

type AppProps = {
  places: PlaceCardEntity[];
};

function App({ places }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main places={places} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/favorites"
          element={
            <AuthChecker element={<Favorites />} isAuthorized={false}></AuthChecker>
          }
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
