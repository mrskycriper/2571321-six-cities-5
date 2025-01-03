// import MockAdapter from 'axios-mock-adapter';
import { Action, PayloadAction } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
// import { createAPI } from '@/api';
import { CITIES } from '@/constants/cities';
import { SortOrder } from '@/types/filter';
import { LoadingState } from '@/types/loading';
import {
  mockAmsterdamHighToLowCityOffers,
  mockCityOffers,
} from '@/test/mocks/city-offers';
import { mockGlobalOffers } from '@/test/mocks/global-offers';
import { mockPoint } from '@/test/mocks/map';
import { extractActionsTypes } from '@/test/utils/redux';
import { AppDispatch, RootState } from '../types';
import {
  changeCity,
  changeSortOrder,
  setActivePoint,
  setCity,
  setLoading,
  setOffers,
  setSortOrder,
  updateCityOffers,
} from './actions';
import { cityOffersReducer, CityOffersState } from './reducer';

describe('Store slice: "cityOffers"', () => {
  const expectedInitialState: CityOffersState = {
    offers: [],
    loading: 'idle',
    city: CITIES.Paris,
    sortOrder: SortOrder.POPULAR,
    activePoint: undefined,
  };

  describe('Validate initial state', () => {
    it('With empty action', () => {
      const emptyAction: Action = { type: '' };

      const result = cityOffersReducer(expectedInitialState, emptyAction);

      expect(result).toEqual(expectedInitialState);
    });

    it('With undefined state and empty action', () => {
      const emptyAction: Action = { type: '' };

      const result = cityOffersReducer(undefined, emptyAction);

      expect(result).toEqual(expectedInitialState);
    });
  });

  describe('Validate simple actions', () => {
    it('Set offers with "setOffers"', () => {
      const mockOffers = mockCityOffers;
      const expectedState: CityOffersState = {
        ...expectedInitialState,
        offers: mockCityOffers,
      };

      const result = cityOffersReducer(
        expectedInitialState,
        setOffers(mockOffers)
      );

      expect(result).toEqual(expectedState);
    });

    it('Set loading with "setLoading"', () => {
      const mockLoading: LoadingState = 'loading';
      const expectedState: CityOffersState = {
        ...expectedInitialState,
        loading: mockLoading,
      };

      const result = cityOffersReducer(
        expectedInitialState,
        setLoading(mockLoading)
      );

      expect(result).toEqual(expectedState);
    });

    it('Set city with "setCity"', () => {
      const mockCity = CITIES.Amsterdam;
      const expectedState: CityOffersState = {
        ...expectedInitialState,
        city: mockCity,
      };

      const result = cityOffersReducer(expectedInitialState, setCity(mockCity));

      expect(result).toEqual(expectedState);
    });

    it('Set sort order with "setSortOrder"', () => {
      const mockSortOrder = SortOrder.LOW_TO_HIGH;
      const expectedState: CityOffersState = {
        ...expectedInitialState,
        sortOrder: mockSortOrder,
      };

      const result = cityOffersReducer(
        expectedInitialState,
        setSortOrder(mockSortOrder)
      );

      expect(result).toEqual(expectedState);
    });

    it('Set active point with "setActivePoint"', () => {
      const mockActivePoint = mockPoint;
      const expectedState: CityOffersState = {
        ...expectedInitialState,
        activePoint: mockActivePoint,
      };

      const result = cityOffersReducer(
        expectedInitialState,
        setActivePoint(mockActivePoint)
      );

      expect(result).toEqual(expectedState);
    });
  });

  describe('Validate sync thunks', () => {
    // const axios = createAPI();
    //const mockAxiosAdapter = new MockAdapter(axios);
    const middleware = [thunk /*.withExtraArgument(axios)*/];
    const mockStoreCreator = configureMockStore<
      RootState,
      PayloadAction,
      AppDispatch
    >(middleware);
    let store: ReturnType<typeof mockStoreCreator>;

    beforeEach(() => {
      store = mockStoreCreator({
        globalOffersReducer: { offers: mockGlobalOffers },
        cityOffersReducer: expectedInitialState,
      });
    });

    it('Calculate and update offers with "updateCityOffers"', () => {
      store = mockStoreCreator({
        globalOffersReducer: { offers: mockGlobalOffers },
        cityOffersReducer: {
          ...expectedInitialState,
          city: CITIES.Amsterdam,
          sortOrder: SortOrder.HIGH_TO_LOW,
        },
      });
      const expectedCityOffers = mockAmsterdamHighToLowCityOffers;

      store.dispatch(updateCityOffers());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const loadingPayload = emittedActions.at(0) as PayloadAction;
      const setOffersPayload = emittedActions.at(1) as PayloadAction;
      const donePayload = emittedActions.at(2) as PayloadAction;

      expect(extractedActionsTypes).toEqual([
        'cityOffersLoading/set',
        'cityOffers/set',
        'cityOffersLoading/set',
      ]);
      expect(loadingPayload.payload).toEqual('loading');
      expect(setOffersPayload.payload).toEqual(expectedCityOffers);
      expect(donePayload.payload).toEqual('done');
    });

    it('Change city with "changeCity"', () => {
      const newCity = CITIES.Amsterdam;

      store.dispatch(changeCity(newCity));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const setCityPayload = emittedActions.at(0) as PayloadAction;

      expect(extractedActionsTypes).toEqual([
        'city/set',
        'cityOffersLoading/set',
        'cityOffers/set',
        'cityOffersLoading/set',
      ]);
      expect(setCityPayload.payload).toEqual(newCity);
    });

    it('Change sort order with "changeSortOrder"', () => {
      const newSortOrder = SortOrder.HIGH_TO_LOW;

      store.dispatch(changeSortOrder(newSortOrder));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const setSortOrderPayload = emittedActions.at(0) as PayloadAction;

      expect(extractedActionsTypes).toEqual([
        'sortOrder/set',
        'cityOffersLoading/set',
        'cityOffers/set',
        'cityOffersLoading/set',
      ]);
      expect(setSortOrderPayload.payload).toEqual(newSortOrder);
    });
  });
});
