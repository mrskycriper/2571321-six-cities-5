import { OfferEntity } from '@/types/offer';
import { Points } from '@/types/point';

const offersToPoints = (allOffers: OfferEntity[]): Points => {
  const points: Points = [];
  allOffers.map((offer) =>
    points.push({
      title: offer.name,
      lat: offer.latitude,
      lng: offer.longitude,
    })
  );
  return points;
};

export default offersToPoints;
