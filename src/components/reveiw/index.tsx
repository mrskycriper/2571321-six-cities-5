import { Comment } from '@/types/comment';
import Rating from '@/components/rating';

type ReviewProps = {
  comment: Comment;
};

function Review({ comment }: ReviewProps): JSX.Element {
  const commentDate = new Date(comment.date);
  const datetime = commentDate.toISOString().split('T')[0];
  const readableDate = commentDate.toLocaleDateString('en-gb', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={comment.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating
          value={comment.rating}
          containerClassName="reviews__rating"
          starsClassName="reviews__stars"
        />
        <p className="reviews__text">{comment.comment}</p>
        <time className="reviews__time" dateTime={datetime}>
          {readableDate}
        </time>
      </div>
    </li>
  );
}

export default Review;
