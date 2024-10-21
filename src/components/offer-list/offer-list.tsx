import { useState } from 'react';
import { OfferEntity } from '@/entities/offer';
import { OfferCard } from '@/components/offer-card';

type OfferListProps = {
  offers: OfferEntity[];
};

function OfferList({ offers }: OfferListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

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
          }}/>
      ))}
    </div>
  );
}

export default OfferList;
