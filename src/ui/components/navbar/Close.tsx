import { IoClose } from "react-icons/io5";
const Close = ({ onClose }: { onClose: () => void }) => {
  return (
    <div>
      <IoClose className="w-7 h-7 cursor-pointer z-50 md:hidden lg:hidden" onClick={onClose} />
    </div>
  );
};

export default Close;
