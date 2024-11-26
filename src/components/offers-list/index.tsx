import classNames from 'classnames';
import OfferCard from '@/components/offer-card';
import { OfferLong } from '@/types/offer';
import { Point } from '@/types/point';

type OffersListProps = {
  offers: OfferLong[];
  type: 'Main' | 'Nearby';
  onOfferSelect?: (point: Point | undefined) => void;
};

function OffersList({
  offers,
  type,
  onOfferSelect,
}: OffersListProps): JSX.Element {
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
    <div className={classNames(containerClassName, 'places__list')}>
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          onOfferSelect={onOfferSelect}
          type={type}
        />
      ))}
    </div>
  );
}

export default OffersList;
