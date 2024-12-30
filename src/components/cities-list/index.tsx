import { CITIES } from '@/constants/cities';
import { applyCity } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { City } from '@/types/city';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.offersReducer.city);
  const handleCityChange = (newCity: City) => {
    dispatch(applyCity(newCity));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.entries(CITIES).map(([cityName, cityObject]) => (
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
