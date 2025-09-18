import { contactInformation } from "../../../../lib/data";
import ContactCard from "./ContactCard";
const ContactCards = () => {
  return (
    <div className="w-full space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold text-gray-800">
          We're Here When You
          <br />
          Need Us Most
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          Whether you're planning ahead or facing an unexpected loss, our team
          is here to support you with care, clarity, and compassion.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactInformation.map((contact, index) => (
          <ContactCard
            key={contact.label || index} // Add a key if you haven't
            contact={contact}
            // side={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactCards;
