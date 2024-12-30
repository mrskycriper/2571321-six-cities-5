import CitiesList from '@/components/cities-list';
import CityOffers from '@/components/city-offers';
import Header from '@/components/header';

function Main(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <CityOffers />
      </main>
    </div>
  );
}

export default Main;
