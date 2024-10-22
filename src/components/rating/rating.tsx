import classNames from 'classnames';

type RatingProps = {
  numericValue?: number;
  starValue: number;
  containerClassName: string;
  starsClassName: string;
  valueClassName?: string;
};

function Rating({
  numericValue,
  starValue,
  containerClassName,
  starsClassName,
  valueClassName = 'offer__rating-value',
}: RatingProps): JSX.Element {
  return (
    <div className={classNames(containerClassName, 'rating')}>
      <div className={classNames(starsClassName, 'rating__stars')}>
        <span style={{ width: `${20 * starValue}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {numericValue !== undefined ? (
        <span className={classNames(valueClassName, 'rating__value')}>{numericValue}</span>
      ) : null}
    </div>
  );
}

export default Rating;
