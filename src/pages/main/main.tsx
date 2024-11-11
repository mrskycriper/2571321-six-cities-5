import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setOffers } from '@/store/actions';
import Header from '@/components/header/header';
import SortingFilter from '@/components/sorting-filter';
import CitiesList from '@/components/cities-list/cities-list';
import Map from '@/components/map/map';
import OffersList from '@/components/offers-list/offers-list';
import offersToPoints from '@/utils/offers-to-points/offers-to-points';
import getCityOffers from '@/utils/get-offers/get-city-offers';
import { SortOrder } from '@/components/sorting-filter/types';

function Main(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOffers(getCityOffers(city)));
  }, [dispatch, city]);

  const [offersPoints, setOffersPoints] = useState(offersToPoints(offers));

  useEffect(() => {
    setOffersPoints(offersToPoints(offers));
  }, [offers]);

  const [activePoint] = useState(undefined);

  const [filter, setFilter] = useState<SortOrder>(SortOrder.POPULAR);
  const handleFilterChange = (newFilter: SortOrder) => {
    setFilter(newFilter);
  };

  const sortedOffers = useMemo(() => {
    switch (filter) {
      case SortOrder.TOP_RATED:
        return offers.toSorted((a, b) => b.rating.numericValue - a.rating.numericValue);
      case SortOrder.HIGH_TO_LOW:
        return offers.toSorted((a, b) => b.price.value - a.price.value);
      case SortOrder.LOW_TO_HIGH:
        return offers.toSorted((a, b) => a.price.value - b.price.value);
      default:
        return offers;
    }
  }, [offers, filter]);

  return (
    <div className="page page--gray page--main">
      <Header isLoggedIn />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${offers.length} places to stay in ${city.title}`}</b>
              <SortingFilter
                currentFilter={filter}
                onFilterChange={handleFilterChange}
              />
              <OffersList offers={sortedOffers} type="Main" />
            </section>
            <div className="cities__right-section">
              <Map
                city={city}
                points={offersPoints}
                selectedPoint={activePoint}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
