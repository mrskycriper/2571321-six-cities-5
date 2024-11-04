import Login from '@/pages/login/login';

type AuthorizedRouteProps = {
  element: JSX.Element;
  isAuthorized: boolean;
};

function AuthChecker({
  element,
  isAuthorized,
}: AuthorizedRouteProps): JSX.Element {
  return isAuthorized ? element : <Login />;
}

export default AuthChecker;
