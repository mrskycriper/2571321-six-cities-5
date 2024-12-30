import { useEffect, useMemo, useState } from 'react';
import Map from '@/components/map';
import OfferCard from '@/components/offer-card';
import SortingFilter from '@/components/sorting-filter';
import Spinner from '@/components/spinner';
import { updateCityOffers } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { offersToPoints } from '@/utils/offers';

function CityOffers(): JSX.Element {
  const dispatch = useAppDispatch();
  const globalOffersLoading = useAppSelector(
    (state) => state.offersReducer.globalOffersLoading
  );
  const cityOffersLoading = useAppSelector(
    (state) => state.offersReducer.cityOffersLoading
  );
  const city = useAppSelector((state) => state.offersReducer.city);
  const cityOffers = useAppSelector((state) => state.offersReducer.cityOffers);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!globalOffersLoading) {
      if (cityOffersLoading === 'idle') {
        dispatch(updateCityOffers());
      }
      if (cityOffersLoading === 'done') {
        setLoading(false);
      }
    }
  }, [globalOffersLoading, cityOffersLoading, dispatch]);

  const mapPoints = useMemo(() => offersToPoints(cityOffers), [cityOffers]);

  if (loading) {
    return <Spinner variant="block" />;
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${cityOffers.length} places to stay in ${city.name}`}</b>
          <SortingFilter />
          <div className="cities__places-list tabs__content places__list">
            {cityOffers.map((offer) => (
              <OfferCard
                offer={offer}
                key={offer.id}
                type="main"
                mapPointHighlight
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map city={city} points={mapPoints}/>
        </div>
      </div>
    </div>
  );
}

export default CityOffers;
