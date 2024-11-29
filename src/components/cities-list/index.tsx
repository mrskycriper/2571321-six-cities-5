import { applyCity } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { cities } from '@/constants/cities';
import { City } from '@/types/city';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const { city } = useAppSelector((state) => state.offersReducer);
  const handleCityChange = (newCity: City) => {
    dispatch(applyCity(newCity));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.entries(cities).map(([cityName, cityObject]) => (
            <li className="locations__item" key={cityName}>
              <a
                className={`locations__item-link tabs__item ${
                  cityName === city.name ? ' tabs__item--active' : ''
                }`}
                onClick={() => handleCityChange(cityObject)}
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
