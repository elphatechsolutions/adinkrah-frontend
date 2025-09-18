import { VscAccount } from "react-icons/vsc";

const Account = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick}>
      <VscAccount className="w-7 h-7 cursor-pointer" />
    </button>
  );
};

export default Account;
