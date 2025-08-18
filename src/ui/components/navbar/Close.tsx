import { IoClose } from "react-icons/io5";
const Close = ({ onClose }: { onClose: () => void }) => {
  return (
    <div>
      <IoClose className="w-7 h-7 cursor-pointer" onClick={onClose} />
    </div>
  );
};

export default Close;
