import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { OfferEntity } from '@/entities/offer';
import { BookmarkButton } from '@/components/bookmark-button';
import { Rating } from '@/components/rating';

type OfferCardProps = {
  offer: OfferEntity;
  onMouseOver?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  type: 'Main' | 'Favorites'
};

function OfferCard({ offer, onMouseOver, onMouseLeave, type }: OfferCardProps): JSX.Element {
  const coverImage = offer.images.filter((el) => el.isCoverImage);
  return (
    <article className={`${type === 'Main' ? 'cities__card' : 'favorites__card'} place-card`} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {offer.mark ? (
        <div className="place-card__mark">
          <span>{offer.mark}</span>
        </div>
      ) : null}
      <div className={`${type === 'Main' ? 'cities__image-wrapper' : 'favorites__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={coverImage[0].src} width={type === 'Main' ? '260' : '150'} height={type === 'Main' ? '200' : '110'} alt={coverImage[0].alt}></img>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price.value}</b>
            <span className="place-card__price-text">&#47;&nbsp;{offer.price.period}</span>
          </div>
          <BookmarkButton marked={type === 'Main' ? false : true} />
        </div>
        <Rating
          starValue={offer.rating.starValue}
          containerClassName={'place-card__rating'}
          starsClassName={'place-card__stars'}
        />
        <h2 className="place-card__name">
        <Link to={`/offer/${offer.id}`}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">{offer.features.placeType}</p>
      </div>
    </article>
  );
}

export default OfferCard;
