import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { allOffers } from '@/mocks/offers/offers';
import { Error404 } from '@/pages/errors/errors';
import CommentForm from '@/components/comment-form/comment-form';
import Rating from '@/components/rating/rating';
import Header from '@/components/header/header';
import ReviewsList from '@/components/reveiws-list/reveiws-list';

function Offer(): JSX.Element {
  const { id } = useParams();

  const offer = useMemo(
    () => allOffers.find(({ id: offerId }) => offerId === id),
    [id]
  );

  if (!offer) {
    return <Error404 />;
  }

  return (
    <div className="page">
      <Header isLoggedIn />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((image) => (
                <div className="offer__image-wrapper" key={image.id}>
                  <img
                    className="offer__image"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.mark ? (
                <div className="offer__mark">
                  <span>{offer.mark}</span>
                </div>
              ) : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.name}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <Rating
                starValue={offer.rating.starValue}
                numericValue={offer.rating.numericValue}
                containerClassName="offer__rating"
                starsClassName="offer__stars"
              />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.features.placeType}
                </li>
                {offer.features.bedroomCount ? (
                  <li className="offer__feature offer__feature--bedrooms">
                    {`${offer.features.bedroomCount} Bedrooms`}
                  </li>
                ) : null}
                <li className="offer__feature offer__feature--adults">
                  {`Max ${offer.features.maxAdultOccupancy} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price.value}</b>
                <span className="offer__price-text">
                  &nbsp;{offer.price.period}
                </span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.insideList.map((item) => (
                    <li className="offer__inside-item" key={item.id}>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarImageSrc}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.status ? (
                    <span className="offer__user-status">
                      {offer.host.status}
                    </span>
                  ) : null}
                </div>
                <div className="offer__description">
                  {offer.description.map((item) => (
                    <p className="offer__text" key={item.id}>
                      {item.text}
                    </p>
                  ))}
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">
                    {offer.reviews.length}
                  </span>
                </h2>
                <ReviewsList reviews={offer.reviews} />
                <CommentForm />
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      className="place-card__image"
                      src="img/room.jpg"
                      width="260"
                      height="200"
                      alt="Place image"
                    />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;80</b>
                      <span className="place-card__price-text">
                        &#47;&nbsp;night
                      </span>
                    </div>
                    <button
                      className="place-card__bookmark-button place-card__bookmark-button--active button"
                      type="button"
                    >
                      <svg
                        className="place-card__bookmark-icon"
                        width="18"
                        height="19"
                      >
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: '80%' }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Room</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      className="place-card__image"
                      src="img/apartment-02.jpg"
                      width="260"
                      height="200"
                      alt="Place image"
                    />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;132</b>
                      <span className="place-card__price-text">
                        &#47;&nbsp;night
                      </span>
                    </div>
                    <button
                      className="place-card__bookmark-button button"
                      type="button"
                    >
                      <svg
                        className="place-card__bookmark-icon"
                        width="18"
                        height="19"
                      >
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: '80%' }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      className="place-card__image"
                      src="img/apartment-03.jpg"
                      width="260"
                      height="200"
                      alt="Place image"
                    />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;180</b>
                      <span className="place-card__price-text">
                        &#47;&nbsp;night
                      </span>
                    </div>
                    <button
                      className="place-card__bookmark-button button"
                      type="button"
                    >
                      <svg
                        className="place-card__bookmark-icon"
                        width="18"
                        height="19"
                      >
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: '100%' }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
