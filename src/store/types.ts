import { City } from '@/types/city/city';
import { OfferEntity } from '@/types/offer/offer';

export type State = {
  city: City;
  offers: OfferEntity[];
};
