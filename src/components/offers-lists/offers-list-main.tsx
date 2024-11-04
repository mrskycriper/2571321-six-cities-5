import { useState } from 'react';
import { OfferEntity } from '@/types/offer/offer';
import OfferCard from '@/components/offer-card/offer-card';

type OffersListMainProps = {
  offers: OfferEntity[];
};

function OffersListMain({ offers }: OffersListMainProps): JSX.Element {
  const [, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          onMouseOver={() => {
            setActiveOfferId(offer.id);
          }}
          onMouseLeave={() => {
            setActiveOfferId(null);
          }}
          type={'Main'}
        />
      ))}
    </div>
  );
}

export default OffersListMain;
