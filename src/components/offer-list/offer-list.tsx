import { OfferEntity } from '@/entities/offer';
import { OfferCard } from '@/components/offer-card';

type OfferListProps = {
  offers: OfferEntity[];
  activeOfferId: string;
};

function OfferList({ offers, activeOfferId }: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard offer={offer} key={offer.id} active={offer.id === activeOfferId ? true : false}/>
      ))}
    </div>
  );
}

export default OfferList;
