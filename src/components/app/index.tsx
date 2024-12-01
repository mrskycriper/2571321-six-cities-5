import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthorizedRoute from '@/components/authorized-route';
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
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/favorites"
          element={<AuthorizedRoute element={<Favorites />} />}
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
