import { useEffect, useState } from "react";
import Heading from "./Heading";
import type { FAQData } from "../../../../lib/definition";

// Define the interface for a single FAQ item

// Main FAQ component
export default function FAQ() {
  // State to manage which FAQ item is currently open/expanded
  const [faqData, setFaqData] = useState<FAQData>([])
  const [openFAQId, setOpenFAQId] = useState<number | null>(null);



  useEffect(() => {
    const fetchFaqData = async () => {
      const fetchFaq = await fetch("/api/fag")
      const data: FAQData = await fetchFaq.json()
      setFaqData(data)
    }

    fetchFaqData()
  }, [])

  // Function to toggle the open/closed state of an FAQ item
  const toggleFAQ = (id: number) => {
    setOpenFAQId(openFAQId === id ? null : id); // If already open, close it; otherwise, open it.
  };

  return (
    <div
      className={`w-[95%] mt-10 lg:mt-30 mx-auto flex flex-col justify-center`}
    >
      <div className="w-full mx-auto lg:w-[100%] md:w-full md:mx-auto bg-white rounded-2xl">
        <Heading heading="Frequently Asked Questions" position="text-center" />


        <div className="space-y-4 flex-col lg:flex-row mt-10">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
                onClick={() => toggleFAQ(item.id)}
                aria-expanded={openFAQId === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="text-lg font-semibold text-gray-800">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-indigo-600 transform transition-transform duration-300 ${openFAQId === item.id ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {openFAQId === item.id && (
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  className="p-4 bg-white text-black border-t border-gray-200 animate-fadeIn"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

