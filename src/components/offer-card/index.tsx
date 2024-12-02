import classNames from 'classnames';
import { Link } from 'react-router-dom';
import BookmarkButton from '@/components/bookmark-button';
import Rating from '@/components/rating';
import { OfferShort } from '@/types/offer';
import { Point } from '@/types/point';
import { offerToPoint } from '@/utils/offers';
import { APP_ROUTES } from '@/constants/routes';

type OfferCardProps = {
  offer: OfferShort;
  type: 'Main' | 'Favorites' | 'Nearby';
  onOfferSelect?: (point: Point | undefined) => void;
};

function OfferCard({
  offer,
  type,
  onOfferSelect,
}: OfferCardProps): JSX.Element {
  const offerPoint = offerToPoint(offer);

  let cardClassName: string;
  let imageWrapperClassName: string;
  let imageWidth: string;
  let imageHeight: string;

  switch (type) {
    case 'Main':
      cardClassName = 'cities__card';
      imageWrapperClassName = 'cities__image-wrapper';
      imageWidth = '260';
      imageHeight = '200';
      break;
    case 'Favorites':
      cardClassName = 'favorites__card';
      imageWrapperClassName = 'favorites__image-wrapper';
      imageWidth = '150';
      imageHeight = '110';
      break;
    case 'Nearby':
      cardClassName = 'near-places__card';
      imageWrapperClassName = 'near-places__image-wrapper';
      imageWidth = '260';
      imageHeight = '200';
      break;
  }

  return (
    <article
      className={classNames(cardClassName, 'place-card')}
      onMouseOver={onOfferSelect ? () => onOfferSelect(offerPoint) : undefined}
      onMouseLeave={onOfferSelect ? () => onOfferSelect(undefined) : undefined}
    >
      {offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div
        className={classNames(
          imageWrapperClassName,
          'place-card__image-wrapper'
        )}
      >
        <Link to={APP_ROUTES.OFFER(offer.id)}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={imageWidth}
            height={imageHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton marked={type === 'Favorites'} />
        </div>
        <Rating
          value={offer.rating}
          containerClassName={'place-card__rating'}
          starsClassName={'place-card__stars'}
        />
        <h2 className="place-card__name">
          <Link to={APP_ROUTES.OFFER(offer.id)}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
