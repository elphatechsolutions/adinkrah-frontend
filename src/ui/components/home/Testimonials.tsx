import { useState, useEffect } from "react";
import Heading from "./Heading";
import type { TestimonialData } from "../../../../lib/definition";


// Main App component
export default function Testimonials() {
  // State to hold the current index of the *first* testimonial in the visible group
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to manage loading status
  // State to track window width for responsive logic
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [testimonials, setTestimonials] = useState<TestimonialData>([])

  // Tailwind's default 'md' breakpoint is 768px.
  const mdBreakpoint = 768;

  useEffect(() => {
    const fetchTestimonials = async () => {
      const fetchtestimonials = await fetch("/api/testimonials")
      const data = await fetchtestimonials.json()
      setTestimonials(data);
    }
    fetchTestimonials()
  }, [])

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

  return (
    <div className="mt-10 lg:mt-30 h-auto flex items-center justify-center font-sans p-3 sm:p-4 lg:p-4">
      <div className="relative w-full lg:w-[82%] mx-auto rounded-2xl p-6 sm:p-8 md:p-10 bg-[#d9d9d9]">
        <Heading heading="Testimonials" position="text-center" />
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
                  <p className="text-lg sm:text-xl text-black mb-6 leading-relaxed flex-grow">
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
