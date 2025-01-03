import { OfferShort } from '@/types/offer';

// First 3 from Paris + first 3 from Amsterdam
export const mockGlobalOffers: OfferShort[] = [
  {
    id: 'f9f97e76-ca10-4c6f-9f5f-94a85b9c894c',
    title: 'Loft Studio in the Central Area',
    type: 'apartment',
    price: 401,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
  },
  {
    id: '411bcf42-5124-4ae7-8e58-43fb15c39694',
    title: 'House in countryside',
    type: 'room',
    price: 219,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
  },
  {
    id: '0c3407b2-53c2-43b5-a555-2bb8d855997f',
    title: 'Perfectly located Castro',
    type: 'house',
    price: 233,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.9,
  },
  {
    id: '1bb66680-e25b-4d05-adf7-4433e0e89880',
    title: 'Loft Studio in the Central Area',
    type: 'apartment',
    price: 299,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.36554,
      longitude: 4.911976,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
  },
  {
    id: 'c2ab8563-f636-4d6d-a9fc-f24d16b963ae',
    title: 'Perfectly located Castro',
    type: 'hotel',
    price: 317,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.385540000000006,
      longitude: 4.902976,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.4,
  },
  {
    id: 'fd17ad67-2aae-4f39-93ab-b3fdf69d52e0',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 405,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.397540000000006,
      longitude: 4.9099759999999995,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.7,
  },
];
