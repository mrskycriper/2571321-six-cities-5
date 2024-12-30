import { useState } from 'react';
import { applySortOrder } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { SortOrder } from '@/types/filter';
import { sortFilters } from './constants';

function SortingFilter(): JSX.Element {
  const dispatch = useAppDispatch();
  const sortOrder = useAppSelector((state) => state.offersReducer.sortOrder);
  const handleFilterChange = (newSortOrder: SortOrder) => {
    dispatch(applySortOrder(newSortOrder));
  };

  const [showFilters, setShowFilters] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setShowFilters(true)}
      >
        {sortOrder}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          showFilters ? 'places__options--opened' : null
        }`}
        onClick={() => setShowFilters(false)}
      >
        {sortFilters.map((filter) => (
          <li
            className={`places__option ${
              filter === sortOrder ? 'places__option--active' : null
            }`}
            tabIndex={0}
            key={filter}
            onClick={() => handleFilterChange(filter)}
          >
            {filter}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingFilter;
