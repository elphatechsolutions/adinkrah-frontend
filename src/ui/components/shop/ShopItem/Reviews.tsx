import type { Review } from "../../../../../lib/definition";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-2xl font-bold my-5">Customer Reviews</h2>
      <div>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
