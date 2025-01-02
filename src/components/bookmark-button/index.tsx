import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { addFavoriteOffer, removeFavoriteOffer } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { OfferShort } from '@/types/offer';
import { APP_ROUTES } from '@/constants/routes';
import { BOOKMARK_BUTTON_STYLES } from './constants';
import { BookmarkButtonVariant } from './types';

type BookmarkButtonProps = {
  variant: BookmarkButtonVariant;
  offer: OfferShort;
  initialState?: boolean;
};

function BookmarkButton({
  variant,
  offer,
  initialState,
}: BookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(
    (state) => state.userDataReducer.authorizationStatus
  );
  const [favorite, setFavorite] = useState(initialState || false);

  const handleBookmarkClick = () => {
    if (authorizationStatus) {
      if (favorite) {
        dispatch(removeFavoriteOffer(offer))
          .unwrap()
          .then((result) => {
            if (result) {
              setFavorite(false);
            }
          });
      } else {
        dispatch(addFavoriteOffer(offer))
          .unwrap()
          .then((result) => {
            if (result) {
              setFavorite(true);
            }
          });
      }
    } else {
      navigate(APP_ROUTES.LOGIN);
    }
  };

  const style = BOOKMARK_BUTTON_STYLES[variant];

  return (
    <button
      className={classNames(
        'button',
        style.buttonClassName,
        favorite ? `${style.buttonClassName}--active` : null
      )}
      onClick={handleBookmarkClick}
      type="button"
    >
      <svg className={style.iconClassName} width={style.width} height={style.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {favorite ? 'To bookmarks' : 'In bookmarks'}
      </span>
    </button>
  );
}

export default BookmarkButton;
