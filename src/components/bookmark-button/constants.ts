import { BookmarkButtonVariant, BookmarkButtonStyle } from './types';

export const BOOKMARK_BUTTON_STYLES: Record<BookmarkButtonVariant, BookmarkButtonStyle> = {
  card: {
    buttonClassName: 'place-card__bookmark-button',
    iconClassName: 'place-card__bookmark-icon',
    width: '18',
    height: '19',
  },
  page: {
    buttonClassName: 'offer__bookmark-button',
    iconClassName: 'offer__bookmark-icon',
    width: '31',
    height: '33',
  },
};
