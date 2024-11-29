// import { useParams } from 'react-router-dom';
// import { useMemo } from 'react';
import { Error404 } from '@/pages/errors';
// import CommentForm from '@/components/comment-form';
// import Rating from '@/components/rating';
// import Header from '@/components/header';
// import ReviewsList from '@/components/reveiws-list';
// import Map from '@/components/map';
// import { OfferShort } from '@/types/offer';
// import offersToPoints from '@/utils/offers-to-points';
// import { Points } from '@/types/point';
// import { City } from '@/types/city';
// import OffersList from '@/components/offers-list';

function Offer(): JSX.Element {
  // const { id } = useParams();

  return <Error404 />; // TODO

  // const currentOffer = useMemo(
  //   () => allOffers.find(({ id: offerId }) => offerId === id),
  //   [id]
  // );

  // if (!currentOffer) {
  //   return <Error404 />;
  // }

  // const currentCity: City = currentOffer.city;

  // const nearbyOffers: OfferShort[] = allOffers.filter(
  //   (offer: OfferShort) =>
  //     offer.id !== currentOffer.id && offer.city === currentCity
  // );

  // const nearbyPoints: Points = offersToPoints(nearbyOffers);

  // return (
  //   <div className="page">
  //     <Header isLoggedIn />
  //     <main className="page__main page__main--offer">
  //       <section className="offer">
  //         <div className="offer__gallery-container container">
  //           <div className="offer__gallery">
  //             {currentOffer.map((image) => (
  //               <div className="offer__image-wrapper" key={image.id}>
  //                 <img
  //                   className="offer__image"
  //                   src={image.src}
  //                   alt={image.alt}
  //                 />
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //         <div className="offer__container container">
  //           <div className="offer__wrapper">
  //             {currentOffer.mark ? (
  //               <div className="offer__mark">
  //                 <span>{currentOffer.mark}</span>
  //               </div>
  //             ) : null}
  //             <div className="offer__name-wrapper">
  //               <h1 className="offer__name">{currentOffer.name}</h1>
  //               <button className="offer__bookmark-button button" type="button">
  //                 <svg className="offer__bookmark-icon" width="31" height="33">
  //                   <use xlinkHref="#icon-bookmark"></use>
  //                 </svg>
  //                 <span className="visually-hidden">To bookmarks</span>
  //               </button>
  //             </div>
  //             <Rating
  //               starValue={currentOffer.rating.starValue}
  //               numericValue={currentOffer.rating.numericValue}
  //               containerClassName="offer__rating"
  //               starsClassName="offer__stars"
  //             />
  //             <ul className="offer__features">
  //               <li className="offer__feature offer__feature--entire">
  //                 {currentOffer.features.placeType}
  //               </li>
  //               {currentOffer.features.bedroomCount ? (
  //                 <li className="offer__feature offer__feature--bedrooms">
  //                   {`${currentOffer.features.bedroomCount} Bedrooms`}
  //                 </li>
  //               ) : null}
  //               <li className="offer__feature offer__feature--adults">
  //                 {`Max ${currentOffer.features.maxAdultOccupancy} adults`}
  //               </li>
  //             </ul>
  //             <div className="offer__price">
  //               <b className="offer__price-value">
  //                 &euro;{currentOffer.price.value}
  //               </b>
  //               <span className="offer__price-text">
  //                 &nbsp;{currentOffer.price.period}
  //               </span>
  //             </div>
  //             <div className="offer__inside">
  //               <h2 className="offer__inside-title">What&apos;s inside</h2>
  //               <ul className="offer__inside-list">
  //                 {currentOffer.insideList.map((item) => (
  //                   <li className="offer__inside-item" key={item.id}>
  //                     {item.text}
  //                   </li>
  //                 ))}
  //               </ul>
  //             </div>
  //             <div className="offer__host">
  //               <h2 className="offer__host-title">Meet the host</h2>
  //               <div className="offer__host-user user">
  //                 <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
  //                   <img
  //                     className="offer__avatar user__avatar"
  //                     src={currentOffer.host.avatarImageSrc}
  //                     width="74"
  //                     height="74"
  //                     alt="Host avatar"
  //                   />
  //                 </div>
  //                 <span className="offer__user-name">
  //                   {currentOffer.host.name}
  //                 </span>
  //                 {currentOffer.host.status ? (
  //                   <span className="offer__user-status">
  //                     {currentOffer.host.status}
  //                   </span>
  //                 ) : null}
  //               </div>
  //               <div className="offer__description">
  //                 {currentOffer.description.map((item) => (
  //                   <p className="offer__text" key={item.id}>
  //                     {item.text}
  //                   </p>
  //                 ))}
  //               </div>
  //             </div>
  //             <section className="offer__reviews reviews">
  //               <h2 className="reviews__title">
  //                 Reviews &middot;{' '}
  //                 <span className="reviews__amount">
  //                   {currentOffer.reviews.length}
  //                 </span>
  //               </h2>
  //               <ReviewsList reviews={currentOffer.reviews} />
  //               <CommentForm />
  //             </section>
  //           </div>
  //         </div>
  //         <Map
  //           city={currentCity}
  //           points={nearbyPoints}
  //           selectedPoint={undefined}
  //         />
  //       </section>
  //       <div className="container">
  //         <section className="near-places places">
  //           <h2 className="near-places__title">
  //             Other places in the neighbourhood
  //           </h2>
  //           <OffersList offers={nearbyOffers} type='Nearby'/>
  //         </section>
  //       </div>
  //     </main>
  //   </div>
  // );
}

export default Offer;
