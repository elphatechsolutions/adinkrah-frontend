import { IoFilter } from "react-icons/io5";

const FilterButton = ({ onClick, show = "flex" }: { onClick: () => void, show?: string }) => {
  return (
    <button
      onClick={onClick}
      className={`${show} items-center font-bold cursor-pointer justify-between border rounded p-2 w-24 border-gray-300 ml-auto mb-10`}
    >
      <span className="mr-1">
        <IoFilter />
      </span>
      <span className="text-sm">FILTER</span>
    </button>
  );
};

export default FilterButton;
