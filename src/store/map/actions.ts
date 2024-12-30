import { createAction } from '@reduxjs/toolkit';
import { Point } from '@/types/point';

export const MapActions = {
  SET_ACTIVE_POINT: 'activePoint/set',
};

export const setActivePoint = createAction<Point | undefined>(
  MapActions.SET_ACTIVE_POINT
);
