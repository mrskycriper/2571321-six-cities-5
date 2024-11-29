import { OfferBase } from '@/types/offer';
import { Points } from '@/types/point';

const offersToPoints = (offers: OfferBase[]): Points => {
  const points: Points = [];
  offers.map((offer: OfferBase) =>
    points.push({
      title: offer.id,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    })
  );
  return points;
};

export default offersToPoints;
