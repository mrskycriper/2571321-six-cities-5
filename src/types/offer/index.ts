import { City } from '@/types/city';
import { MapLocation } from '@/types/map-location';
import { UserShort } from '@/types/user';

export type OfferBase = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: MapLocation;
  isFavorite?: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type OfferShort = OfferBase & {
  previewImage: string;
};

export type OfferLong = OfferBase & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserShort;
  images: string[];
  maxAdults: number;
};

export type OfferListType = 'main' | 'nearby';

export type OfferCardType = OfferListType | 'favorites';

export type OfferCardStyle = {
  cardClassName: string;
  imageWrapperClassName: string;
  imageWidth: string;
  imageHeight: string;
};
