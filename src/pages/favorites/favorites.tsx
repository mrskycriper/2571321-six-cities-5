import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { OffersListFavorites } from '@/components/offers-lists/offers-lists';
import { OfferEntity } from '@/types/offer/offer';

type FavoritesProps = {
  offers: OfferEntity[];
};

function Favorites({ offers }: FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Header isLoggedIn />
      <OffersListFavorites offers={offers} />
      <Footer />
    </div>
  );
}

export default Favorites;
