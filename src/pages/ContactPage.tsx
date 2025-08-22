import ContactInfo from "../ui/components/contact/ContactInfo";
import CardWrapper from "../ui/components/CardWrapper";
import Pagewrapper from "./Pagewrapper";

const ContactPage = () => {
  return (
    <Pagewrapper>
      <CardWrapper width="lg:w-[80%] w-[95%]">
        <ContactInfo />
      </CardWrapper>
    </Pagewrapper>
  );
};

export default ContactPage;
