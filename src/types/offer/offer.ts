import { UserEntity } from '@/types/user/user';
import { City } from '@/types/city/city';
import { ReviewItem } from '@/types/review/review';

export type OfferImage = {
  id: number;
  src: string;
  alt: string;
  isCoverImage?: boolean;
};

export type OfferMark = 'Premium';

export type OfferRating = {
  numericValue: number;
  starValue: number;
};

export type OfferFeatures = {
  placeType: 'Apartment' | 'Room';
  bedroomCount?: number;
  maxAdultOccupancy: number;
};

export type OfferPrice = {
  value: number;
  period: 'night';
};

export type OfferInsideItem = {
  id: number;
  text: string;
};

export type OfferDescriptionItem = {
  id: number;
  text: string;
};

export type OfferEntity = {
  id: string;
  city: City;
  images: OfferImage[];
  mark?: OfferMark;
  name: string;
  rating: OfferRating;
  features: OfferFeatures;
  price: OfferPrice;
  insideList: OfferInsideItem[];
  host: UserEntity;
  description: OfferDescriptionItem[];
  reviews: ReviewItem[];
  latitude: number;
  longitude: number;
};
