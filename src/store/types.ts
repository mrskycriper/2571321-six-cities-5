import { City } from '@/types/city/city';
import { OfferEntity } from '@/types/offer/offer';
import { store } from '.';

export type State = {
  city: City;
  offers: OfferEntity[];
};

export type AppDispatch = typeof store.dispatch
