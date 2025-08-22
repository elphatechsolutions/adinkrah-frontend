import Heading from "../home/Heading";

const ContactForm = () => {
  return (
    <div className="bg-[#d9d9d9] rounded-2xl flex flex-col justify-center grow w-full h-auto">
      <div className="p-5">
        <Heading
          heading="Contact Us For Any
Questions"
        />
      </div>
      <form action="" className="flex flex-wrap justify-between">
        <div className="formGroup w-1/2 flex flex-col p-5 gap-y-2">
          <label htmlFor="name">Your Name</label>
          <input
            className="bg-white h-15 rounded p-2"
            type="text"
            name="name"
            id="name"
            placeholder="Jack Smith"
            required
          />
        </div>
        <div className="formGroup w-1/2 flex flex-col p-5 gap-y-2">
          <label htmlFor="email">Email</label>
          <input
            className="bg-white h-15 rounded p-2"
            type="text"
            name="email"
            id="email"
            placeholder="jacksmith.gmail.com"
            required
          />
        </div>
        <div className="formGroup w-1/2 flex flex-col p-5 gap-y-2">
          <label htmlFor="phone">Phone</label>
          <input
            className="bg-white h-15 rounded p-2"
            type="tel"
            name="phone"
            id="phone"
            placeholder="+233 124 345 789"
            required
          />
        </div>
        <div className="formGroup w-1/2 flex flex-col p-5 gap-y-2">
          <label htmlFor="subject">Subject</label>
          <input
            className="bg-white h-15 rounded p-2"
            type="text"
            name="subject"
            id="subject"
            placeholder="Qestion"
            required
          />
        </div>
        <div className="formGroup w-full gap-y-2 flex flex-col p-5">
          <label htmlFor="message">How can we help you ?</label>
          <textarea
            name="message"
            id="message"
            className="bg-white h-15 rounded resize-none"
            rows={4}
            cols={10}
          ></textarea>
        </div>
        <div className="p-5">
          <button
            type="submit"
            className="bg-white rounded-3xl p-2 cursor-pointer"
          >
            Send Message
          </button>
          <span></span>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
