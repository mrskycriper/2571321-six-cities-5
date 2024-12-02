export const API_ROUTES = {
  OFFERS: {
    GET_GLOBAL: '/offers',
    GET_EXACT: (offerId: string) => `/offers/${offerId}`,
    GET_NEARBY: (offerId: string) => `/offers/${offerId}/nearby`,
  },
  FAVORITE: {
    GET: '/favorite',
    SET: (offerId: string, status: string) => `/favorite/${offerId}/${status}`,
  },
  COMMENTS: {
    GET: (offerId: string) => `/comments/${offerId}`,
    POST: (offerId: string) => `/comments/${offerId}`,
  },
  USER: {
    VALIDATE: '/login',
    LOGIN: '/login',
    LOGOUT: '/logout',
  },
};
