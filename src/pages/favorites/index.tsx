import Header from '@/components/header';
import Footer from '@/components/footer';
import FavoriteOffers from '@/components/favorite-offers';

function Favorites(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <FavoriteOffers />
      <Footer />
    </div>
  );
}

export default Favorites;
