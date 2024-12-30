import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { fetchGlobalOffers, validateUser } from '@/store/actions';

function useAppInit() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(validateUser());
    dispatch(fetchGlobalOffers());
  }, [dispatch]);
}

export default useAppInit;
