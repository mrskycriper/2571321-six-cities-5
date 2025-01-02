import { useMemo } from 'react';
import OfferCard from '@/components/offer-card';
import { useAppSelector } from '@/store/hooks';
import { CityName } from '@/types/city';
import { OfferShort } from '@/types/offer';

function FavoriteOffers(): JSX.Element {
  const offers = useAppSelector(
    (state) => state.userDataReducer.favoriteOffers
  );

  const cityOffersMap = useMemo(() => {
    const map: Partial<Record<CityName, OfferShort[]>> = {};

    offers.forEach((offer) => {
      const city = offer.city;
      if (!map[city.name]) {
        map[city.name] = [];
      }
      map[city.name]?.push(offer);
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
                    <OfferCard offer={offer} key={offer.id} type="favorites" />
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

export default FavoriteOffers;
