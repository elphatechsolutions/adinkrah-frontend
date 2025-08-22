import type { FAQItem, QuestionItem } from "../../../../lib/definition";

const Faq = ({
  item,
  toggleFAQ,
  openFAQId,
}: {
  item: FAQItem;
  toggleFAQ: (id: string) => void;
  openFAQId: string;
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">{item.category}</h2>
      {item.questions.map((questionItem: QuestionItem) => (
        <div
          key={questionItem.id}
          className="border border-gray-300 rounded-lg overflow-hidden"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
            onClick={() => toggleFAQ(questionItem.id)}
            aria-expanded={openFAQId === questionItem.id}
            aria-controls={`faq-answer-${questionItem.id}`}
          >
            <span className="text-lg font-semibold text-gray-800">
              {questionItem.question}
            </span>
            <svg
              className={`w-6 h-6 text-indigo-600 transform transition-transform duration-300 ${
                openFAQId === questionItem.id ? "rotate-180" : ""
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
          {openFAQId === questionItem.id && (
            <div
              id={`faq-answer-${questionItem.id}`}
              role="region"
              aria-labelledby={`faq-question-${questionItem.id}`}
              className="p-4 bg-white text-black border-t border-gray-200 animate-fadeIn"
            >
              <p>{questionItem.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
