import { useState } from "react";
import Faq from "./Faq";

const Faqs = () => {
  const [openFAQId, setOpenFAQId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQId(openFAQId === id ? "" : id);
  };

  const faqs = [
    {
      id: "shopping-information",
      category: "Shopping Information",
      questions: [
        {
          id: "q1-payment-methods",
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer secure payment through PayPal.",
        },
        {
          id: "q2-international-shipping",
          question: "Do you offer international shipping?",
          answer:
            "Yes, we ship to a wide range of international destinations. Shipping costs and times will vary depending on your location. You can view the final shipping cost at checkout.",
        },
        {
          id: "q3-track-order",
          question: "How can I track my order?",
          answer:
            "Once your order has shipped, you will receive an email with a tracking number and a link to the carrier's website. Please allow 24-48 hours for the tracking information to update.",
        },
        {
          id: "q4-change-cancel-order",
          question: "Can I change or cancel my order after it has been placed?",
          answer:
            "We process orders quickly to get them to you as soon as possible. Therefore, we may not be able to change or cancel an order after it has been placed. Please contact our customer service team immediately for assistance.",
        },
      ],
    },
    {
      id: "payment-information",
      category: "Payment Information",
      questions: [
        {
          id: "q5-payment-security",
          question: "Is my payment information secure?",
          answer:
            "Yes, your security is our top priority. Our website uses Secure Sockets Layer (SSL) technology to encrypt all payment data. We do not store your credit card details on our servers.",
        },
        {
          id: "q6-charge-time",
          question: "When will my card be charged?",
          answer: "Your card will be charged at the time your order is placed.",
        },
        {
          id: "q7-payment-declined",
          question: "Why was my payment declined?",
          answer:
            "Payments can be declined for several reasons. Please double-check your card details, including the number, expiration date, and security code. If the problem persists, we recommend contacting your bank or credit card company.",
        },
        {
          id: "q8-buy-now-pay-later",
          question: "Do you offer a buy now, pay later option?",
          answer:
            "We are exploring additional payment options for our customers. Please check back for updates on future payment methods.",
        },
      ],
    },
    {
      id: "order-returns",
      category: "Order Returns",
      questions: [
        {
          id: "q9-return-policy",
          question: "What is your return policy?",
          answer:
            "We accept returns on most items within 30 days of delivery. Items must be in their original condition, unused, and with all tags and packaging intact. Please see our full return policy for a list of exceptions.",
        },
        {
          id: "q10-initiate-return",
          question: "How do I initiate a return?",
          answer:
            "To start a return, please visit our Returns Portal or contact our customer support team with your order number and the reason for the return. We will provide you with a return shipping label and instructions.",
        },
        {
          id: "q11-refund-time",
          question: "How long does it take to get a refund?",
          answer:
            "Once we receive and inspect your returned item, we will process your refund within 5-7 business days. The refund will be credited to your original payment method. Please note that it may take additional time for the refund to appear on your bank or credit card statement.",
        },
        {
          id: "q12-exchange-item",
          question: "Can I exchange an item?",
          answer:
            "We do not offer direct exchanges at this time. If you need a different size or color, please return the original item for a refund and place a new order for the item you desire.",
        },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      {faqs.map((faqCategory) => (
        <Faq
          key={faqCategory.id}
          item={faqCategory}
          toggleFAQ={toggleFAQ}
          openFAQId={openFAQId ?? ""}
        />
      ))}
    </div>
  );
};

export default Faqs;
