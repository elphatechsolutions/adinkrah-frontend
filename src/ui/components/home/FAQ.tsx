import { useState } from "react";

// Define the interface for a single FAQ item
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Main FAQ component
export default function FAQ() {
  // State to manage which FAQ item is currently open/expanded
  const [openFAQId, setOpenFAQId] = useState<number | null>(null);

  // Sample FAQ data
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy! Simply visit our 'Services' page, choose the plan that best fits your needs, and follow the on-screen instructions. You can also contact our sales team for a personalized consultation.",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual subscriptions. For enterprise clients, custom invoicing options are available.",
    },
    {
      id: 3,
      question: "Can I upgrade or downgrade my plan later?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time through your account dashboard. Changes will be prorated and applied to your next billing cycle.",
    },
    {
      id: 4,
      question: "Do you offer customer support?",
      answer:
        "Yes, we offer 24/7 customer support via live chat, email, and phone for all our paid plans. Basic users have access to our comprehensive knowledge base and community forum.",
    },
    {
      id: 5,
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied within the first 30 days, simply contact us for a full refund, no questions asked.",
    },
    {
      id: 6,
      question: "Is my data secure with your service?",
      answer:
        "Data security is our top priority. We use industry-standard encryption, regular security audits, and comply with all relevant data protection regulations (e.g., GDPR, CCPA) to ensure your data is safe and private.",
    },
  ];

  // Function to toggle the open/closed state of an FAQ item
  const toggleFAQ = (id: number) => {
    setOpenFAQId(openFAQId === id ? null : id); // If already open, close it; otherwise, open it.
  };

  return (
    <div
      className={`w-[95%] mt-10 lg:mt-30 mx-auto flex flex-col justify-center`}
    >
      <div className="w-[95%] mx-auto lg:w-[100%] md:w-[95%] md:mx-auto bg-white rounded-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 flex-col lg:flex-row">
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
                  className="p-4 bg-white text-gray-700 border-t border-gray-200 animate-fadeIn"
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

// CSS for the fade-in animation (can be added to a global CSS file or <style> tag if in a pure HTML file)
// For React, Tailwind's built-in animations are preferred, but for custom effects like this, direct CSS is fine.
// This is an example of what 'animate-fadeIn' would do:
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
*/
