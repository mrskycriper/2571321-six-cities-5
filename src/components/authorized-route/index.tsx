import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { APP_ROUTES } from '@/constants/routes';
import { useAppSelector } from '@/store/hooks';

type AuthorizedRouteProps = {
  element: JSX.Element;
};

function AuthorizedRoute({ element }: AuthorizedRouteProps): JSX.Element {
  const navigate = useNavigate();
  const { authorizationStatus } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    if (!authorizationStatus) {
      navigate(APP_ROUTES.LOGIN);
    }
  }, [navigate, authorizationStatus]);

  return element;
}

export default AuthorizedRoute;
