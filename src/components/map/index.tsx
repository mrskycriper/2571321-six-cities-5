import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import useMap from '@/hooks/use-map';
import { City } from '@/types/city';
import { Point } from '@/types/point';
import { useAppSelector } from '@/store/hooks';

type MapProps = {
  city: City;
  points: Point[];
  fixedSelectedPoint?: Point | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function Map({ city, points, fixedSelectedPoint }: MapProps): JSX.Element {
  const activePoint = useAppSelector((state) => state.mapReducer.activePoint) && fixedSelectedPoint;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker
          .setIcon(
            activePoint !== undefined && point.title === activePoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, activePoint]);

  return (
    <section className="cities__map map" style={{ background: 'none' }}>
      <div style={{ height: '500px' }} ref={mapRef}></div>
    </section>
  );
}

export default Map;
