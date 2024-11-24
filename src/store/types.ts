import { City } from '@/types/city';
import { OfferEntity } from '@/types/offer';
import { store } from '.';

export type State = {
  city: City;
  offers: OfferEntity[];
};

export type AppDispatch = typeof store.dispatch
