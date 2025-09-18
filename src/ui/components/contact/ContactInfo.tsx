import ContactForm from "./ContactForm";
import ContactCards from "./ContactCards";

const COntactInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 my-10 w-full items-stretch">
      <div className="w-full lg:w-1/2 flex items-center">
        <ContactCards />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="h-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default COntactInfo;
