import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { getGlobalOffers } from '@/store/offers/actions';

function useAppInit() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGlobalOffers());
  }, [dispatch]);
}

export default useAppInit;
