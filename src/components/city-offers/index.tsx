import { useMemo } from 'react';
import Map from '@/components/map';
import OfferCard from '@/components/offer-card';
import SortingFilter from '@/components/sorting-filter';
import { useAppSelector } from '@/store/hooks';
import { offersToPoints } from '@/utils/offers';

function CityOffers(): JSX.Element {
  const city = useAppSelector((state) => state.cityOffersReducer.city);
  const cityOffers = useAppSelector((state) => state.cityOffersReducer.offers);

  const mapPoints = useMemo(() => offersToPoints(cityOffers), [cityOffers]);

  // TODO Проверить стиль карты
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
