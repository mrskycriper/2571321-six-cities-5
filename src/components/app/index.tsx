import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthorizedRoute from '@/components/authorized-route';
import { APP_ROUTES } from '@/constants/routes';
import Main from '@/pages/main';
import Login from '@/pages/login';
import Favorites from '@/pages/favorites';
import Offer from '@/pages/offer';
import { Error404 } from '@/pages/errors';
import useAppInit from '@/hooks/use-app-init';

function App(): JSX.Element {
  useAppInit();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.MAIN} element={<Main />} />
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route
          path={APP_ROUTES.FAVORITES}
          element={<AuthorizedRoute element={<Favorites />} />}
        />
        <Route path={APP_ROUTES.OFFER} element={<Offer />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
