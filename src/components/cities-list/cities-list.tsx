import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCity } from '@/store/actions';
import { cities } from '@/constants/cities/cities';

function CitiesList(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.entries(cities).map(([cityName, cityObject]) => (
            <li className="locations__item" key={cityName}>
              <a
                className={`locations__item-link tabs__item ${
                  cityName === city.title ? ' tabs__item--active' : ''
                }`}
                onClick={() => dispatch(setCity(cityObject))}
              >
                <span>{cityName}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
