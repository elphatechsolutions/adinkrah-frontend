import Heading from "../home/Heading";
import Close from "../navbar/Close";

interface VendorRegisterProps {
  onNext: () => void; // go to VendorNext
  onRegisterSwitch: () => void; // back to Register
  onClose: () => void;
}
const VendorRegister = ({
  onClose,
  onRegisterSwitch,
  onNext,
}: VendorRegisterProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Modal content */}
      <div className="bg-white rounded shadow-lg sm:w-full w-[90%] max-w-lg p-6 relative">
        {/* Close button */}
        <div className="absolute top-4 right-4">
          <Close onClose={onClose} />
        </div>{" "}
        {/* Heading */}
        <Heading heading="Vendor Registration Form" size="text-sm" />
        {/* Form */}
        <form className="mt-6 space-y-4">
          <div>
            <input
              type="text"
              placeholder="Business Name*"
              name="business_name"
              id="business_name"
              className="w-full border outline-none rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-300"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Business Address *"
              name="business_address"
              id="business_address"
              className="w-full border outline-none rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-300"
            />
          </div>{" "}
          <div>
            <input
              type="email"
              placeholder="Email Address *"
              name="email"
              id="email"
              className="w-full border outline-none rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-300"
            />
          </div>
          <div>
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              placeholder="Phone Number *"
              className="w-full border outline-none rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-300"
            />
          </div>
          <div>
            <input
              type="text"
              name="number_of_employees"
              id="number_of_employees"
              placeholder="Number of Employees *"
              className="w-full border outline-none rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-300"
            />
          </div>
        </form>
        <div className="flex my-10 gap-5">
          <button
            onClick={onRegisterSwitch}
            className="w-1/2 ml-auto text-sm block bg-black text-white py-2 rounded opacity-80 cursor-pointer hover:opacity-100 transition"
          >
            Back
          </button>{" "}
          <button
            onClick={onNext}
            className="w-1/2 ml-auto text-sm block bg-black text-white py-2 rounded opacity-80 cursor-pointer hover:opacity-100 transition"
          >
            Next
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default VendorRegister;
