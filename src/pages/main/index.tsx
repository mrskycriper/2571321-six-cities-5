import { useEffect, useMemo, useState } from 'react';
import CitiesList from '@/components/cities-list';
import Header from '@/components/header';
import Map from '@/components/map';
import OffersList from '@/components/offers-list';
import SortingFilter from '@/components/sorting-filter';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Point } from '@/types/point';
import { offersToPoints } from '@/utils/offers';
import Spinner from '@/components/spinner';
import { updateCityOffers } from '@/store/offers/actions';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const { loading, city, cityOffers } = useAppSelector(
    (state) => state.offersReducer
  );

  useEffect(() => {
    if (!loading) {
      dispatch(updateCityOffers());
    }
  }, [loading, dispatch]);

  const mapPoints = useMemo(() => offersToPoints(cityOffers), [cityOffers]);
  const [activePoint, setActivePoint] = useState<Point | undefined>(undefined);
  const handleOfferSelect = (point: Point | undefined) => {
    setActivePoint(point);
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        {loading ? (
          <Spinner variant="block" />
        ) : (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${cityOffers.length} places to stay in ${city.name}`}</b>
                <SortingFilter />
                <OffersList
                  offers={cityOffers}
                  type="main"
                  onOfferSelect={handleOfferSelect}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  city={city}
                  points={mapPoints}
                  selectedPoint={activePoint}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Main;
