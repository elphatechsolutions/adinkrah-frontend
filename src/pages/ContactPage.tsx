import ContactInfo from "../ui/components/contact/ContactInfo";
import CardWrapper from "../ui/components/CardWrapper";
import Hero from "../ui/components/Hero";

const ContactPage = () => {
  return (
    <section id="contact">
      {/* Hero section below the navbar */}
      <Hero page="page" />
      <CardWrapper width="w-[95%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" page="page">
        <ContactInfo />
      </CardWrapper>
    </section>
  );
};

export default ContactPage;
