import { ReviewItem } from '@/types/review';
import Review from '../reveiw';

type ReviewsListProps = {
  reviews: ReviewItem[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((reveiw) => (
        <Review key={reveiw.id} review={reveiw} />
      ))}
    </ul>
  );
}

export default ReviewsList;
