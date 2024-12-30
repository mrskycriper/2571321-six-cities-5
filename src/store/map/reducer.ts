import { createSlice } from '@reduxjs/toolkit';
import { Point } from '@/types/point';
import { setActivePoint } from './actions';

type MapState = {
  activePoint: Point | undefined;
};

const initialState: MapState = {
  activePoint: undefined,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setActivePoint, (state, action) => {
      state.activePoint = action.payload;
    });
  },
});

export const { reducer: mapReducer } = mapSlice;
