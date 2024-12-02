import Review from '@/components/reveiw';
import { CommentLong } from '@/types/comment';

type ReviewsListProps = {
  comments: CommentLong[];
};

function ReviewsList({ comments }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <Review key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

export default ReviewsList;
