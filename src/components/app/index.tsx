import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthorizedRoute from '@/components/authorized-route';
import Spinner from '@/components/spinner';
import { APP_ROUTES } from '@/constants/routes';
import useAppInit from '@/hooks/use-app-init';
import Favorites from '@/pages/favorites';
import Login from '@/pages/login';
import Main from '@/pages/main';
import Offer from '@/pages/offer';
import { Error404 } from '@/pages/errors';
import { useAppSelector } from '@/store/hooks';

function App(): JSX.Element {
  const globalOffersLoading = useAppSelector(
    (state) => state.offersReducer.globalOffersLoading
  );
  const userLoading = useAppSelector((state) => state.userReducer.userLoading);
  useAppInit();

  if (globalOffersLoading || userLoading) {
    return <Spinner variant="page" />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.MAIN} element={<Main />} />
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route
          path={APP_ROUTES.FAVORITES}
          element={<AuthorizedRoute element={<Favorites />} />}
        />
        <Route path={APP_ROUTES.OFFER(':id')} element={<Offer />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
