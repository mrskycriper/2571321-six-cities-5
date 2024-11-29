import { City } from '@/types/city';
import { OfferShort } from '@/types/offer';

function filterOffers(offers: OfferShort[], city: City) {
  return offers.filter((offer) => offer.city.name === city.name);
}

export default filterOffers;
