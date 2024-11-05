import { useState } from 'react';
import { OfferEntity } from '@/types/offer/offer';
import OfferCard from '@/components/offer-card/offer-card';
import classNames from 'classnames';

type OffersListProps = {
  offers: OfferEntity[];
  type: 'Main' | 'Nearby';
};

function OffersList({ offers, type }: OffersListProps): JSX.Element {
  const [, setActiveOfferId] = useState<string | null>(null);

  let containerClassName: string;

  switch (type) {
    case 'Main':
      containerClassName = 'cities__places-list tabs__content';
      break;
    case 'Nearby':
      containerClassName = 'near-places__list';
      break;
  }

  return (
    <div className={classNames(containerClassName, 'places__list')} >
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
          type={type}
        />
      ))}
    </div>
  );
}

export default OffersList;
