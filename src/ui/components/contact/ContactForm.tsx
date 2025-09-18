const ContactForm = () => {
  return (
    <div className="bg-[#d9d9d9] rounded-2xl p-6 w-full h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold text-gray-800">
          Contact Us For Any <br />
          Questions
        </h2>
        <p className="text-gray-600 mt-2">
          We'll get back to you as soon as possible
        </p>
      </div>

      <form className="space-y-4 flex-grow flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div className="form-group">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Name
            </label>
            <input
              className="w-full bg-white rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
              type="text"
              name="name"
              id="name"
              placeholder="Jack Smith"
              required
              title="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              className="w-full bg-white rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
              type="email"
              name="email"
              id="email"
              placeholder="jacksmith@gmail.com"
              required
              title="Enter a valid email address"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Phone */}
          <div className="form-group">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              className="w-full bg-white rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
              type="tel"
              name="phone"
              id="phone"
              placeholder="+233 24 123 4567"
              required
              title="Add your phone number"
            />
          </div>

          {/* Subject */}
          <div className="form-group">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              className="w-full bg-white rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
              type="text"
              name="subject"
              id="subject"
              placeholder="Question"
              required
              title="What is this about?"
            />
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            How can we help you?
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full bg-white rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition min-h-[150px]"
            placeholder="Write your message here..."
            required
            title="Tell us how we can help you"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-2 mt-auto">
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-6 py-3 font-medium hover:bg-blue-700 transition duration-300 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
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
