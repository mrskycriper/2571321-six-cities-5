import classNames from 'classnames';
import { Link } from 'react-router-dom';
import BookmarkButton from '@/components/bookmark-button';
import Rating from '@/components/rating';
import { APP_ROUTES } from '@/constants/routes';
import { OfferShort, OfferCardType } from '@/types/offer';
import { Point } from '@/types/point';
import { offerToPoint } from '@/utils/offers';
import { OFFER_CARD_STYLES } from './constants';

type OfferCardProps = {
  offer: OfferShort;
  type: OfferCardType;
  onOfferSelect?: (point: Point | undefined) => void;
};

function OfferCard({
  offer,
  type,
  onOfferSelect,
}: OfferCardProps): JSX.Element {
  const offerPoint = offerToPoint(offer);
  const cardStyle = OFFER_CARD_STYLES[type];

  return (
    <article
      className={classNames(cardStyle.cardClassName, 'place-card')}
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
          cardStyle.imageWrapperClassName,
          'place-card__image-wrapper'
        )}
      >
        <Link to={APP_ROUTES.OFFER(offer.id)}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={cardStyle.imageWidth}
            height={cardStyle.imageHeight}
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
          <BookmarkButton marked={type === 'favorites'} />
        </div>
        <Rating
          value={offer.rating}
          containerClassName={'place-card__rating'}
          starsClassName={'place-card__stars'}
        />
        <h2 className="place-card__name">
          <Link to={APP_ROUTES.OFFER(offer.id)}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">
          {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
        </p>
      </div>
    </article>
  );
}

export default OfferCard;
