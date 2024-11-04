import { OfferEntity } from '@/types/offer/offer';
import { cities } from '@/mocks/cities/cities';

export const favoriteOffers: OfferEntity[] = [
  {
    id: '07a16137-7d2a-4e94-bb41-673bea130172',
    city: cities['Amsterdam'],
    images: [
      {
        id: 1,
        src: 'img/room.jpg',
        alt: 'Photo studio'
      },
      {
        id: 2,
        src: 'img/apartment-01.jpg',
        alt: 'Photo studio'
      },
      {
        id: 3,
        src: 'img/apartment-02.jpg',
        alt: 'Photo studio'
      },
      {
        id: 4,
        src: 'img/apartment-03.jpg',
        alt: 'Photo studio',
        isCoverImage: true
      },
      {
        id: 5,
        src: 'img/studio-01.jpg',
        alt: 'Photo studio'
      },
      {
        id: 6,
        src: 'img/apartment-01.jpg',
        alt: 'Photo studio'
      }
    ],
    name: 'Nice, cozy, warm big bed apartment',
    rating: {
      numericValue: 4.8,
      starValue: 4
    },
    features: {
      placeType: 'Apartment',
      bedroomCount: 3,
      maxAdultOccupancy: 4
    },
    price: {
      value: 180,
      period: 'night'
    },
    insideList: [
      {
        id: 1,
        text: 'Wi-Fi'
      },
      {
        id: 2,
        text: 'Washing machine'
      },
      {
        id: 3,
        text: 'Towels'
      },
      {
        id: 4,
        text: 'Heating'
      },
      {
        id: 5,
        text: 'Coffee machine'
      },
      {
        id: 6,
        text: 'Baby seat'
      },
      {
        id: 7,
        text: 'Kitchen'
      },
      {
        id: 8,
        text: 'Dishwasher'
      },
      {
        id: 9,
        text: 'Cabel TV'
      },
      {
        id: 10,
        text: 'Fridge'
      }

    ],
    host: {
      avatarImageSrc: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      status: 'Pro'
    },
    description: [
      {
        id: 1,
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
      },
      {
        id: 2,
        text: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
      }
    ],
    reviews: [
      {
        id: '7b08ac81-d317-4bed-a4f9-bdc7000ccacb',
        user: {
          avatarImageSrc: 'img/avatar-max.jpg',
          name: 'Max'
        },
        stars: 4,
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        datetime: '2019-04-24',
        readableDate: 'April 2019'
      }
    ]
  },
  {
    id: '1f0686d9-84d4-4131-a21a-631a3905f15b',
    city: cities['Amsterdam'],
    images: [
      {
        id: 1,
        src: 'img/room.jpg',
        alt: 'Photo studio',
        isCoverImage: true
      },
      {
        id: 2,
        src: 'img/apartment-01.jpg',
        alt: 'Photo studio'
      },
      {
        id: 3,
        src: 'img/apartment-02.jpg',
        alt: 'Photo studio'
      },
      {
        id: 4,
        src: 'img/apartment-03.jpg',
        alt: 'Photo studio'
      },
      {
        id: 5,
        src: 'img/studio-01.jpg',
        alt: 'Photo studio'
      },
      {
        id: 6,
        src: 'img/apartment-01.jpg',
        alt: 'Photo studio'
      }
    ],
    name: 'Wood and stone place',
    rating: {
      numericValue: 4.8,
      starValue: 4
    },
    features: {
      placeType: 'Room',
      maxAdultOccupancy: 2
    },
    price: {
      value: 80,
      period: 'night'
    },
    insideList: [
      {
        id: 1,
        text: 'Wi-Fi'
      },
      {
        id: 2,
        text: 'Towels'
      },
      {
        id: 3,
        text: 'Heating'
      },
      {
        id: 4,
        text: 'Fridge'
      }

    ],
    host: {
      avatarImageSrc: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      status: 'Pro'
    },
    description: [
      {
        id: 1,
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
      },
      {
        id: 2,
        text: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
      }
    ],
    reviews: [
      {
        id: 'e2fac560-cdcb-4444-8609-a7402daa15d2',
        user: {
          avatarImageSrc: 'img/avatar-max.jpg',
          name: 'Max'
        },
        stars: 4,
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        datetime: '2019-04-24',
        readableDate: 'April 2019'
      }
    ]
  },
  {
    id: '969c5497-5632-4c2f-a838-2d89d2f8b660',
    city: cities['Cologne'],
    images: [
      {
        id: 1,
        src: 'img/apartment-small-04.jpg',
        alt: 'Photo studio',
        isCoverImage: true
      }
    ],
    name: 'White castle',
    rating: {
      numericValue: 5,
      starValue: 5
    },
    features: {
      placeType: 'Apartment',
      bedroomCount: 3,
      maxAdultOccupancy: 4
    },
    price: {
      value: 180,
      period: 'night'
    },
    insideList: [
      {
        id: 1,
        text: 'Wi-Fi'
      },
      {
        id: 2,
        text: 'Washing machine'
      },
      {
        id: 3,
        text: 'Towels'
      },
      {
        id: 4,
        text: 'Heating'
      },
      {
        id: 5,
        text: 'Coffee machine'
      },
      {
        id: 6,
        text: 'Baby seat'
      },
      {
        id: 7,
        text: 'Kitchen'
      },
      {
        id: 8,
        text: 'Dishwasher'
      },
      {
        id: 9,
        text: 'Cabel TV'
      },
      {
        id: 10,
        text: 'Fridge'
      }

    ],
    host: {
      avatarImageSrc: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      status: 'Pro'
    },
    description: [
      {
        id: 1,
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
      },
      {
        id: 2,
        text: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
      }
    ],
    reviews: [
      {
        id: '2df1b93d-c8e6-4e9f-8522-aece081c0f11',
        user: {
          avatarImageSrc: 'img/avatar-max.jpg',
          name: 'Max'
        },
        stars: 5,
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        datetime: '2019-04-24',
        readableDate: 'April 2019'
      }
    ]
  }
];
