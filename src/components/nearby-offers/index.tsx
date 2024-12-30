import OfferCard from '@/components/offer-card';
import { OfferShort } from '@/types/offer';

type NearbyOffersProps = {
  offers: OfferShort[];
};

function NearbyOffers({ offers }: NearbyOffersProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <OfferCard offer={offer} key={offer.id} type="nearby" />
      ))}
    </div>
  );
}

export default NearbyOffers;
