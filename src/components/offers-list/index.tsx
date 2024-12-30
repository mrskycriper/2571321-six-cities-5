import classNames from 'classnames';
import OfferCard from '@/components/offer-card';
import { OfferListType, OfferShort } from '@/types/offer';
import { Point } from '@/types/point';
import { OFFER_LIST_STYLES } from './constants';

type OffersListProps = {
  offers: OfferShort[];
  type: OfferListType;
  onOfferSelect?: (point: Point | undefined) => void;
};

function OffersList({
  offers,
  type,
  onOfferSelect,
}: OffersListProps): JSX.Element {
  const containerClassName = OFFER_LIST_STYLES[type];

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
