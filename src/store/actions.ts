import { createAction } from '@reduxjs/toolkit';
import { City } from '@/types/city/city';
import { OfferEntity } from '@/types/offer/offer';

export const Actions = {
  SET_CITY: 'SET_CITY',
  SET_OFFERS: 'SET_OFFERS',
};

export const setCity = createAction<City>(Actions.SET_CITY);

export const setOffers = createAction<OfferEntity[]>(Actions.SET_OFFERS);
