import Heading from "../home/Heading";
import ContactCard from "./ContactCard";
import { contactInformation } from "../../../../lib/utils";
import ContactForm from "./ContactForm";

const COntactInfo = () => {
  return (
    <div className="flex md:flex-col flex-col lg:flex-row gap-10">
      <div className="flex flex-col gap-y-5 lg:w-1/2">
        <div className="lg:w-100 md:w-150 flex flex-col justify-between gap-y-10">
          <Heading heading="We're Here When You Need Us Most" />
          <p>
            Whether you're planning ahead or facing an unexpected loss, our team
            is here to support you with care, clarity, and compassion.
          </p>
        </div>

        <div className="flex justify-between gap-5 flex-wrap w-auto lg:w-auto">
          {contactInformation.map((contact, index) => (
            <ContactCard
              key={contact.label || index} // Add a key if you haven't
              contact={contact}
              side={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center w-full lg:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
};

export default COntactInfo;
