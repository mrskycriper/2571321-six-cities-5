import { useEffect, useMemo, useState } from 'react';
import CitiesList from '@/components/cities-list';
import Header from '@/components/header';
import Map from '@/components/map';
import OffersList from '@/components/offers-list';
import SortingFilter from '@/components/sorting-filter';
import { SortOrder } from '@/components/sorting-filter/types';
import { setOffers } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Point } from '@/types/point';
import offersToPoints from '@/utils/offers-to-points';
import getCityOffers from '@/utils/get-offers';

function Main(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOffers(getCityOffers(city)));
  }, [dispatch, city]);

  const [filter, setFilter] = useState<SortOrder>(SortOrder.POPULAR);
  const handleFilterChange = (newFilter: SortOrder) => {
    setFilter(newFilter);
  };

  const offersPoints = useMemo(() => offersToPoints(offers), [offers]);
  const [activePoint, setActivePoint] = useState<Point | undefined>(undefined);
  const handleOfferSelect = (point: Point | undefined) => {
    setActivePoint(point);
  };

  const sortedOffers = useMemo(() => {
    switch (filter) {
      case SortOrder.TOP_RATED:
        return offers.toSorted(
          (a, b) => b.rating.numericValue - a.rating.numericValue
        );
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
              <OffersList
                offers={sortedOffers}
                type="Main"
                onOfferSelect={handleOfferSelect}
              />
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
