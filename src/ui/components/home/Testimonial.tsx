import type { TestimonialType } from "../../../../lib/definition";
import { ImQuotesLeft } from "react-icons/im";

const Testimonial = ({ testimonial }: { testimonial: TestimonialType }) => {
  return (
    <div
      key={testimonial.id}
      // Each testimonial takes full width on small, half width on medium/large screens
      // Added styling for the card itself: background, shadow, rounded corners, padding, and margin
      className="w-full flex-shrink-0 md:w-1/2 p-4 sm:p-6 md:p-8"
    >
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full flex flex-col gap-y-5 justify-between">
        <div className="flex items-center bg-black p-0.5 max-w-5 text-white text-center">
          <ImQuotesLeft className="text-lg" />
        </div>
        <p className="lg:text-lg text-sm md:text-sm sm:text-sm text-black leading-relaxed flex-grow">
          "{testimonial.quote}"
        </p>
        <div className="flex gap-x-5">
          <div>
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-12 h-12 rounded-full border-4 border-indigo-400 shadow-md mb-4"
            />
          </div>
          <div>
            <p className="font-semibold text-xl text-black">
              {testimonial.author}
            </p>
            <p className="text-md md:text-sm font-extralight text-gray-600">
              {testimonial.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
