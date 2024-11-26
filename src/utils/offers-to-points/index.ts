import { OfferBase } from '@/types/offer';
import { Points } from '@/types/point';

const offersToPoints = (allOffers: OfferBase[]): Points => {
  const points: Points = [];
  allOffers.map((offer: OfferBase) =>
    points.push({
      title: offer.title,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    })
  );
  return points;
};

export default offersToPoints;
