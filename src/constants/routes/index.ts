export const APP_ROUTES = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: 'favorites',
  OFFER: (offerId: string) => `/offer/${offerId}`,
};
