import Header from '@/components/header/header';
import { OffersListFavorites } from '@/components/offers-lists/offers-lists';
import { OfferEntity } from '@/types/offer/offer';

type FavoritesProps = {
  offers: OfferEntity[];
};

function Favorites({ offers }: FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Header isLoggedIn/>
      <OffersListFavorites offers={offers}/>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
