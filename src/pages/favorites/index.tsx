import Header from '@/components/header';
import Footer from '@/components/footer';
import FavoritesList from '@/components/favorites-list';
import { OfferEntity } from '@/types/offer';

type FavoritesProps = {
  offers: OfferEntity[];
};

function Favorites({ offers }: FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Header isLoggedIn />
      <FavoritesList offers={offers} />
      <Footer />
    </div>
  );
}

export default Favorites;
