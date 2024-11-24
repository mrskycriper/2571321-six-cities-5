import { City } from '@/types/city';
import { OfferEntity } from '@/types/offer';
import { allOffers } from '@/mocks/offers/all-offers';

const getCityOffers = (city: City): OfferEntity[] => allOffers.filter(
  (offer: OfferEntity) => offer.city === city
);

export default getCityOffers;
