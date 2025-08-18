import { GoArrowUpRight } from "react-icons/go";
const Search = ({ searchStyles }: { searchStyles: string }) => {
  return (
    <div className={`w-full min ${searchStyles}`}>
      <form className={`flex gap-x-2`}>
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-2 w-[80%] h-12 rounded-4xl border border-gray-400 bg-white text-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="text-black font-extrabold rounded-4xl bg-white p-2 w-12 flex items-center justify-center opacity-80 hover:opacity-100 cursor-pointer transition duration-200"
        >
          <GoArrowUpRight className="w-5 h-5 font-extrabold" />
        </button>
      </form>
    </div>
  );
};

export default Search;
