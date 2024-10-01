export type PlaceMark = 'Premium';

export type PlacePriceType = 'night';

export type PlaceType = 'Apartment' | 'Room';

export type PlaceCardEntity = {
  mark?: PlaceMark;
  imageSrc: string;
  priceValue: number;
  priceType: PlacePriceType;
  starRating: 1 | 2 | 3 | 4 | 5;
  name: string;
  type: PlaceType;
};