import Heading from "../home/Heading";
import { Link } from "react-router-dom";

const FaqAside = () => {
  return (
    <div className="bg-[#d9d9d9] p-5 rounded-xl h-auto max-h-80 flex flex-col gap-y-5">
      <Heading heading="Have a question" />
      <p>
        If you have an issue or question that requires immediate assistance, you
        can click the button below to chat live with a Customer Service
        representative.
      </p>
      <p>
        Please allow 06 - 12 business days from the time your package arrives
        back to us for a refund to be issued.
      </p>
      <Link
        to="/contact"
        className="text-white py-2 px-4 rounded-xl bg-blue-500 w-1/2 text-center"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default FaqAside;
