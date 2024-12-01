import Header from '@/components/header';
import Footer from '@/components/footer';
import FavoritesList from '@/components/favorites-list';
// import { OfferShort } from '@/types/offer';

function Favorites(): JSX.Element {
  // TODO
  return (
    <div className="page">
      <Header />
      <FavoritesList offers={[]} />
      <Footer />
    </div>
  );
}

export default Favorites;
