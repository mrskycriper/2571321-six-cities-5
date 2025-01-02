import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/constants/routes';
import { logout } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

type HeaderProps = {
  isLoginPage?: boolean;
};

function Header({ isLoginPage }: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { authorizationStatus, userData } = useAppSelector(
    (state) => state.userDataReducer
  );

  const handleLogout: React.MouseEventHandler<HTMLAnchorElement> = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to="/"
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          {isLoginPage ? null : (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authorizationStatus ? (
                  <>
                    <li className="header__nav-item user">
                      <Link
                        className="header__nav-link header__nav-link--profile"
                        to={APP_ROUTES.FAVORITES}
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">
                          {userData?.name}
                        </span>
                        <span className="header__favorite-count">0</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" onClick={handleLogout}>
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </>
                ) : (
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={APP_ROUTES.LOGIN}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
