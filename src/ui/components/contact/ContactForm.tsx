import Heading from "../home/Heading";

const ContactForm = () => {
  return (
    <div className="bg-[#d9d9d9] rounded-2xl flex flex-col justify-center grow w-full h-auto">
      <div className="p-5">
        <Heading heading="Contact Us For Any Questions" />
      </div>

      <form action="" className="flex flex-wrap justify-between">
        {/* Name */}
        <div className="formGroup w-1/2 flex flex-col p-5 gap-y-2">
          <label htmlFor="name">Your Name</label>
          <input
            className="bg-white h-12 rounded p-3 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            type="text"
            name="name"
            id="name"
            placeholder="Jack Smith"
            required
            title="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="formGroup w-1/2 flex flex-col p-5 gap-y-2">
          <label htmlFor="email">Email</label>
          <input
            className="bg-white h-12 rounded p-3 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            type="email"
            name="email"
            id="email"
            placeholder="jacksmith@gmail.com"
            required
            title="Enter a valid email address"
          />
        </div>

        {/* Phone */}
        <div className="formGroup w-1/2 flex flex-col p-5 gap-y-2">
          <label htmlFor="phone">Phone</label>
          <input
            className="bg-white h-12 rounded p-3 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            type="tel"
            name="phone"
            id="phone"
            placeholder="+233 124 345 789"
            required
            title="Add your phone number"
          />
        </div>

        {/* Subject */}
        <div className="formGroup w-1/2 flex flex-col p-5 gap-y-2">
          <label htmlFor="subject">Subject</label>
          <input
            className="bg-white h-12 rounded p-3 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            type="text"
            name="subject"
            id="subject"
            placeholder="Question"
            required
            title="What is this about?"
          />
        </div>

        {/* Message */}
        <div className="formGroup w-full flex flex-col p-5 gap-y-2">
          <label htmlFor="message">How can we help you?</label>
          <textarea
            name="message"
            id="message"
            className="bg-white rounded p-3 resize-none outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            rows={4}
            cols={10}
            placeholder="Write your message here..."
            required
            title="Tell us how we can help you"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="p-5">
          <button
            type="submit"
            className="bg-white rounded-3xl px-6 py-2 font-medium hover:bg-blue-100 transition duration-300 outline-none focus:ring-2 focus:ring-blue-400"
            title="Submit your message"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
