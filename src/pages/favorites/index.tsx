import Header from '@/components/header';
import Footer from '@/components/footer';
import FavoriteOffers from '@/components/favorite-offers';
// import { OfferShort } from '@/types/offer';

function Favorites(): JSX.Element {
  // TODO
  return (
    <div className="page">
      <Header />
      <FavoriteOffers offers={[]} />
      <Footer />
    </div>
  );
}

export default Favorites;
