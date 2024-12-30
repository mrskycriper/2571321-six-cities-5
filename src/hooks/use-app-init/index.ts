import { useEffect } from 'react';
import { fetchGlobalOffers, validateUser } from '@/store/actions';
import { useAppDispatch } from '@/store/hooks';

function useAppInit() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(validateUser());
    dispatch(fetchGlobalOffers());
  }, [dispatch]);
}

export default useAppInit;
