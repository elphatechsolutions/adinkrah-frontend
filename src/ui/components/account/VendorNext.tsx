import Heading from "../home/Heading";
import Close from "../navbar/Close";
import ImageFileSelector from "./ImageFileSelector";
import { RiArrowGoBackLine } from "react-icons/ri";
import SpinnerButton from "../animation/SpinnerButton";

interface VendorNextProps {
  onBack: () => void; // back to VendorRegister
  onClose: () => void;
}
const VendorNext = ({ onClose, onBack }: VendorNextProps) => {
  //   const handleFormSubmission = (e: FormDataEvent) => {
  //     e.preventDefault();
  //     console.log("Get form data here");
  //   };
  const isSubmitting: boolean = false;
  const handleFilesChange = (files: File[]) => {
    console.log("Files selected:", files);
    // upload or set form state
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Modal content */}
      <div className="bg-white rounded shadow-lg sm:w-full w-[90%] max-w-lg p-6 relative">
        {/* Close button */}
        <div className="absolute top-4 right-4 hidden">
          <Close onClose={onClose} />
        </div>{" "}
        {/* Heading */}
        <div className="flex justify-between items-center">
          <Heading heading="Vendor Registration Form" size="text-sm" />
          <button
            className="z-50 transition-colors rounded-full"
            onClick={onBack}
          >
            {" "}
            <div className="flex justify-center items-center text-base cursor-pointer">
              <RiArrowGoBackLine className="w-5 h-5 border-2 p-0.5 border-white rounded-2xl" />
              <span className="text-base">Back</span>
            </div>
          </button>
        </div>
        {/* Form */}
        <form className="mt-6 space-y-4">
          <div>
            <select
              name="business_name"
              id="business_name"
              className="w-full border outline-none rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-300"
            >
              <option value="Vendor1">Vendor 1</option>
              <option value="Vendor2">Vendor 2</option>{" "}
              <option value="Vendor3">Vendor 3</option>{" "}
              <option value="Vendor4">Vendor 4</option>{" "}
              <option value="Vendor5">Vendor 5</option>{" "}
              <option value="Vendor6">Vendor 16</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Website *"
              name="website"
              id="website"
              className="w-full border outline-none rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-300"
            />
          </div>{" "}
          <div>
            <input
              type="text"
              placeholder="Social Media *"
              name="social_media"
              id="social_media"
              className="w-full border outline-none rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-300"
            />
          </div>
          <ImageFileSelector
            onFilesChange={handleFilesChange}
            accept="image/*,application/pdf"
            multiple
            maxFiles={5}
            maxSize={10 * 1024 * 1024} // 10 MB
          />
          <div>
            <input type="checkbox" name="certify" id="certify" />
            <span className="ml-1 text-sm">
              I hereby certify that the information provided is accurate and
              complete
            </span>
          </div>
          <div className="flex my-10 gap-5">
            <SpinnerButton
              type="submit"
              isSubmitting={isSubmitting}
              disabled={isSubmitting}
            >
              Proceed to register
            </SpinnerButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorNext;
