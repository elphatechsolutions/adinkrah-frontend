import { CiSearch } from "react-icons/ci";

const Search = ({ searchStyles }: { searchStyles: string }) => {
  return (
    <div className={`w-full max-w-md mx-auto ${searchStyles}`}>
      <form
        className={`flex items-center bg-white border border-gray-200 rounded shadow-sm overflow-hidden`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow px-2 py-2 text-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="text-black font-extrabold p-2 rounded opacity-80 hover:opacity-100 cursor-pointer transition duration-200"
        >
          <CiSearch className="w-5 h-5 font-extrabold" />
        </button>
      </form>
    </div>
  );
};

export default Search;
