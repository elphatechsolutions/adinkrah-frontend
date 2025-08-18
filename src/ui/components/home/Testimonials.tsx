import { useState, useEffect } from "react";

// Define the TestimonialData interface directly in this file
interface TestimonialData {
  id: number;
  quote: string;
  author: string;
  title: string;
  image: string;
}

// Main App component
export default function Testimonials() {
  // State to hold the current index of the *first* testimonial in the visible group
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to manage loading status
  const [isLoading, setIsLoading] = useState(true);
  // State to track window width for responsive logic
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Tailwind's default 'md' breakpoint is 768px.
  const mdBreakpoint = 768;

  // Sample testimonial data (using the data from your latest prompt)
  const testimonials: TestimonialData[] = [
    {
      id: 1,
      quote:
        "This service transformed our workflow! The team is incredibly responsive and the results speak for themselves. Highly recommend for any business looking to innovate.",
      author: "Jane Doe",
      title: "CEO, Tech Solutions Inc.",
      image: "https://placehold.co/120x120/A78BFA/ffffff?text=JD", // Tailwind purple-400 equivalent
    },
    {
      id: 2,
      quote:
        "An absolute game-changer. The intuitive design and powerful features have made our daily tasks much more efficient. We couldn't be happier with the outcome.",
      author: "John Smith",
      title: "Marketing Director, Creative Minds",
      image: "https://placehold.co/120x120/38B2AC/ffffff?text=JS", // Tailwind teal-400 equivalent
    },
    {
      id: 3,
      quote:
        "From concept to execution, the journey was seamless. Their expertise and dedication are evident in every detail. Truly a professional and impactful experience.",
      author: "Emily White",
      title: "Founder, Global Innovations",
      image: "https://placehold.co/120x120/FBBF24/ffffff?text=EW", // Tailwind yellow-400 equivalent
    },
    {
      id: 4,
      quote:
        "Outstanding support and an excellent product. It has significantly boosted our productivity and client satisfaction. A must-have for modern businesses.",
      author: "Michael Brown",
      title: "Operations Manager, Future Forward",
      image: "https://placehold.co/120x120/60A5FA/ffffff?text=MB", // Tailwind blue-400 equivalent
    },
    {
      id: 5,
      quote:
        "The best decision we made! Their innovative approach and dedication to quality are truly remarkable. Our business has seen significant growth.",
      author: "Sarah Johnson",
      title: "Product Manager, Innovate Corp.",
      image: "https://placehold.co/120x120/EF4444/ffffff?text=SJ", // Tailwind red-500 equivalent
    },
    {
      id: 6,
      quote:
        "Exceptional service from start to finish. They truly understand client needs and deliver beyond expectations. A highly reliable partner.",
      author: "David Lee",
      title: "Director of Sales, Growth Hub",
      image: "https://placehold.co/120x120/8B5CF6/ffffff?text=DL", // Tailwind violet-500 equivalent
    },
  ];

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate 1 second loading time
    return () => clearTimeout(timer);
  }, []);

  // Effect to handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Reset current index when screen size changes to prevent showing empty space
      setCurrentIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine how many testimonials are visible based on screen width
  const isLargeScreen = windowWidth >= mdBreakpoint;

  // Function to go to the next testimonial (always shifts by one)
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous testimonial (always shifts by one)
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Calculate the translateX value for the smooth sliding animation
  // The value is calculated based on current index and how many actual cards are visible on screen
  // If large screen, each step covers 50% width (1 testimonial), otherwise 100% (1 testimonial)
  const translateXValue = currentIndex * (isLargeScreen ? 100 / 2 : 100);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="text-xl font-semibold text-gray-700">
          Loading testimonials...
        </div>
      </div>
    );
  }

  return (
    <div className="h-auto flex items-center justify-center font-sans p-4 sm:p-6 lg:p-8">
      <div className="relative w-full lg:w-[82%] mx-auto rounded-2xl p-6 sm:p-8 md:p-10 bg-[#d9d9d9] shadow-inner">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-8 sm:mb-12">
          Testimonials
        </h2>

        {/* Testimonial Display Area - Inner container to hold the sliding testimonials */}
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${translateXValue}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                // Each testimonial takes full width on small, half width on medium/large screens
                // Added styling for the card itself: background, shadow, rounded corners, padding, and margin
                className="w-full flex-shrink-0 md:w-1/2 p-4 sm:p-6 md:p-8 text-center"
              >
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full flex flex-col justify-between">
                  <p className="text-lg sm:text-xl italic text-black mb-6 leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex flex-col items-center mt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-24 h-24 rounded-full border-4 border-indigo-400 shadow-md mb-4"
                    />
                    <p className="font-bold text-xl text-black">
                      {testimonial.author}
                    </p>
                    <p className="text-md text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={goToPrevious}
            className="p-3 bg-gray-500 opacity-80 text-white rounded-full shadow-lg hover:opacity-100 focus:outline-none focus:ring-4 focus:ring-gr-300 transform transition-all pointer-cursor duration-200 active:scale-95 ml-2 md:ml-4"
            aria-label="Previous Testimonial"
          >
            {/* SVG for left arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={goToNext}
            className="p-3 bg-gray-500 text-white rounded-full shadow-lg hover:opacity-80 focus:outline-none focus:ring-4 focus:ring-gray-300 transform transition-transform duration-200 active:scale-95 mr-2 md:mr-4"
            aria-label="Next Testimonial"
          >
            {/* SVG for right arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                // Highlight the dot if its corresponding testimonial is visible
                currentIndex === index ||
                (isLargeScreen && currentIndex + 1 === index)
                  ? "bg-indigo-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
