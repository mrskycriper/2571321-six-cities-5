import { City } from '@/types/city';
import { SortOrder } from '@/types/filter';
import { OfferBase, OfferShort } from '@/types/offer';
import { Point } from '@/types/point';

export function offerToPoint(offer: OfferBase): Point {
  return {
    title: offer.id,
    lat: offer.location.latitude,
    lng: offer.location.longitude,
  };
}

export function offersToPoints(offers: OfferBase[]): Point[] {
  const points: Point[] = [];
  offers.map((offer: OfferBase) =>
    points.push({
      title: offer.id,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    })
  );
  return points;
}

export function filterOffers(offers: OfferShort[], city: City): OfferShort[] {
  return offers.filter((offer) => offer.city.name === city.name);
}

export function sortOffers(
  offers: OfferShort[],
  sortOrder: SortOrder
): OfferShort[] {
  switch (sortOrder) {
    case SortOrder.TOP_RATED:
      return offers.toSorted((a, b) => b.rating - a.rating);
    case SortOrder.HIGH_TO_LOW:
      return offers.toSorted((a, b) => b.price - a.price);
    case SortOrder.LOW_TO_HIGH:
      return offers.toSorted((a, b) => a.price - b.price);
    default:
      return offers;
  }
}
