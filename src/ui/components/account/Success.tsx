import { IoCheckmarkCircle } from "react-icons/io5";

// interface SuccessProps {
//   redirecting: string;
// }

const Success = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Modal content */}
      <div className="bg-white rounded shadow-lg sm:w-full w-[90%] max-w-lg p-6 relative">
        <div>
          <IoCheckmarkCircle />
        </div>
        <p>
          We’ve received your vendor application and our team will review it
          shortly. You’ll hear back from us within 2–3 business days via email.
        </p>
      </div>
    </div>
  );
};

export default Success;
