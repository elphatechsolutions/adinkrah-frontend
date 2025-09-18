import type {
  Review,
  reviewBy,
  ReviewData,
} from "../../../../../lib/definition";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const ReviewCard = ({ review }: { review: Review }) => {
  
  return (
    <div className="w-full flex gap-4 p-4 shadow rounded-lg">
      <div className="flex-shrink-0">
        <div className="flex justify-center items-center bg-amber-100 text-amber-600 rounded-full w-12 h-12 text-xl font-bold">
          {review.by[0]?.name?.charAt(0) || 'U'}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        {review.by.map((by: reviewBy) => (
          <>
            <div className="flex items-center gap-2">
              <p className="font-medium">{by.name}</p>
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>
                    {by.rating >= star ? (
                      <FaStar />
                    ) : by.rating >= star - 0.5 ? (
                      <FaStarHalfAlt />
                    ) : (
                      <FaRegStar />
                    )}
                  </span>
                ))}
                <span className="ml-1 text-gray-600 text-sm">
                  {by.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </>
        ))}
        <div className="flex flex-col gap-y-2">
          {review.review.map((review: ReviewData) => (
            <>
              <p className="text-gray-700">{review.comment}</p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
