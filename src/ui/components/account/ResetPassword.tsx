import Close from "../navbar/Close";
import Heading from "../home/Heading";
import { RiArrowGoBackLine } from "react-icons/ri";
import SpinnerButton from "../animation/SpinnerButton";

interface ResetPasswordProps {
  onClose: () => void;
  onNext: () => void;
  onBack: () => void;
}

const ResetPassword = ({ onClose, onBack }: ResetPasswordProps) => {
  const isSubmitting: boolean = false;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Modal content */}
      <div className="bg-white rounded shadow-lg sm:w-full w-[90%] max-w-lg p-6 relative">
        {/* Close button */}
        <div className="absolute top-4 right-4 ">
          <Close onClose={onClose} />
        </div>{" "}
        {/* Heading */}
        <div className="flex justify-between items-center mt-10">
          <Heading heading="Reset your password" size="text-sm" />
          <button
            className="z-50 transition-colors rounded-full"
            onClick={onBack}
          >
            {" "}
            <div className="flex justify-center items-center cursor-pointer">
              <RiArrowGoBackLine className="w-5 h-5 border-2 p-0.5 border-white rounded-2xl" />
              <span className="text-base">Back</span>
            </div>
          </button>
        </div>
        {/* Form */}
        <form className="mt-6 space-y-5">
          <div>
            <input
              type="email"
              placeholder="email address *"
              name="email"
              id="email"
              className="w-full border outline-none rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-300"
            />
          </div>
          <SpinnerButton
            type="submit"
            isSubmitting={isSubmitting}
            disabled={isSubmitting}
          >
            proceed to reset password
          </SpinnerButton>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
