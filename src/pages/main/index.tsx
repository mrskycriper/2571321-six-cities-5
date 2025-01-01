import classNames from 'classnames';
import { useEffect, useState } from 'react';
import CitiesList from '@/components/cities-list';
import CityOffers from '@/components/city-offers';
import CityOffersEmpty from '@/components/city-offers-empty';
import Header from '@/components/header';
import Spinner from '@/components/spinner';
import { setActivePoint, updateCityOffers } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const globalOffersLoading = useAppSelector(
    (state) => state.globalOffersReducer.loading
  );
  const cityOffersLoading = useAppSelector(
    (state) => state.cityOffersReducer.loading
  );
  const offersLength = useAppSelector(
    (state) => state.cityOffersReducer.offers.length
  );

  dispatch(setActivePoint(undefined));

  const [offersBlock, setOffersBlock] = useState(<Spinner variant="block" />);
  const [pageClass, setPageClass] = useState('');

  useEffect(() => {
    if (!globalOffersLoading) {
      if (cityOffersLoading === 'idle') {
        dispatch(updateCityOffers());
      }
      if (cityOffersLoading === 'loading') {
        setOffersBlock(<Spinner variant="block" />);
      }
      if (cityOffersLoading === 'done') {
        if (offersLength === 0) {
          setPageClass('page__main--index-empty');
          setOffersBlock(<CityOffersEmpty />);
        } else {
          setPageClass('');
          setOffersBlock(<CityOffers />);
        }
      }
    }
  }, [globalOffersLoading, cityOffersLoading, offersLength, dispatch]);

  return (
    <div className={classNames('page page--gray page--main', pageClass)}>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        {offersBlock}
      </main>
    </div>
  );
}

export default Main;
