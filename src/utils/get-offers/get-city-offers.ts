import { City } from '@/types/city/city';
import { OfferEntity } from '@/types/offer/offer';
import { allOffers } from '@/mocks/offers/all-offers';

const getCityOffers = (city: City): OfferEntity[] => allOffers.filter(
  (offer: OfferEntity) => offer.city === city
);

export default getCityOffers;
