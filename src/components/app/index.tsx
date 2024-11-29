import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/pages/main';
import Login from '@/pages/login';
import Favorites from '@/pages/favorites';
import Offer from '@/pages/offer';
import { Error404 } from '@/pages/errors';
import AuthChecker from '@/components/auth-checker';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/favorites"
          element={<AuthChecker element={<Favorites />} isAuthorized />}
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
