import { useEffect, useState } from "react";
import Heading from "./Heading";
import type {
  FAQData,
  FAQItem,
  QuestionItem,
} from "../../../../lib/definition";
import Faq from "../faq/Faq";

// Define the interface for a single FAQ item

// Main FAQ component
export default function FAQ() {
  // State to manage which FAQ item is currently open/expanded
  // const [faqData, setFaqData] = useState<FAQData>([]);
  const [openFAQId, setOpenFAQId] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchFaqData = async () => {
  //     const fetchFaq = await fetch("/api/fag");
  //     const data: FAQData = await fetchFaq.json();
  //     setFaqData(data);
  //   };

  //   fetchFaqData();
  // }, []);

  const items = [
    {
      id: "dkdkdkk",
      category: "",
      questions: [
        {
          id: "1",
          question: "How do I get started with your services?",
          answer:
            "Getting started is easy! Simply visit our 'Services' page, choose the plan that best fits your needs, and follow the on-screen instructions. You can also contact our sales team for a personalized consultation.",
        },
        {
          id: "2",
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual subscriptions. For enterprise clients, custom invoicing options are available.",
        },
        {
          id: "3",
          question: "Can I upgrade or downgrade my plan later?",
          answer:
            "Absolutely! You can upgrade or downgrade your plan at any time through your account dashboard. Changes will be prorated and applied to your next billing cycle.",
        },
        {
          id: "4",
          question: "Do you offer customer support?",
          answer:
            "Yes, we offer 24/7 customer support via live chat, email, and phone for all our paid plans. Basic users have access to our comprehensive knowledge base and community forum.",
        },
        {
          id: "5",
          question: "What is your refund policy?",
          answer:
            "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied within the first 30 days, simply contact us for a full refund, no questions asked.",
        },
        {
          id: "6",
          question: "Is my data secure with your service?",
          answer:
            "Data security is our top priority. We use industry-standard encryption, regular security audits, and comply with all relevant data protection regulations (e.g., GDPR, CCPA) to ensure your data is safe and private.",
        },
      ],
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenFAQId(openFAQId === id ? "" : id); // If already open, close it; otherwise, open it.
  };

  return (
    <div
      className={`w-[95%] mt-10 lg:mt-30 mx-auto flex flex-col justify-center`}
    >
      <div className="w-full mx-auto lg:w-[100%] md:w-full md:mx-auto bg-white rounded-2xl">
        <Heading heading="Frequently Asked Questions" position="text-center" />
        {items.map((faqItem) => (
          <Faq
            key={faqItem.id}
            item={faqItem}
            toggleFAQ={toggleFAQ}
            openFAQId={openFAQId ?? ""}
          />
        ))}
        <div className="space-y-4"></div>
      </div>
    </div>
  );
}
