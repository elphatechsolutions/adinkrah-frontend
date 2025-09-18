import type { QuestionItem } from "../../../../lib/definition";

const FaqCard = ({
  question,
  toggleFAQ,
  openFAQId,
}: {
  question: QuestionItem;
  toggleFAQ: (id: string) => void;
  openFAQId: string | null;
}) => {
  return (
    <div
      key={question.id}
      className="bg-white rounded-xl cursor-pointer shadow-sm p-6 hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => toggleFAQ(question.id)}
        className="w-full text-left focus:outline-none"
      >
        <div className="flex items-center justify-between">
          <h3 className="lg:text-lg text-sm cursor-pointer font-medium text-gray-900">
            {question.question}
          </h3>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform ${
              openFAQId === question.id ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      {openFAQId === question.id && (
        <div className="mt-4 text-gray-600">
          <p>{question.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
