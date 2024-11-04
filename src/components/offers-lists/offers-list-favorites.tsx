import { useMemo } from 'react';
import { OfferEntity } from '@/types/offer/offer';
import OfferCard from '@/components/offer-card/offer-card';
import { CityName } from '@/types/city/city';

type OffersListFavoritesProps = {
  offers: OfferEntity[];
};

function OffersListFavorites({
  offers,
}: OffersListFavoritesProps): JSX.Element {
  const cityOffersMap = useMemo(() => {
    const map: Partial<Record<CityName, OfferEntity[]>> = {};

    offers.forEach((offer) => {
      const city = offer.city;
      if (!map[city.title]) {
        map[city.title] = [];
      }
      map[city.title]?.push(offer);
    });

    return map;
  }, [offers]);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(cityOffersMap).map(([city, mappedOffers]) => (
              <li className="favorites__locations-items" key={city}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {mappedOffers.map((offer) => (
                    <OfferCard
                      offer={offer}
                      key={offer.id}
                      type={'Favorites'}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default OffersListFavorites;
