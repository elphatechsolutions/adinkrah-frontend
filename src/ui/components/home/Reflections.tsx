import { Link } from "react-router-dom";

export default function Reflections() {
  return (
    <div className="mt-10 lg:mt-30 h-auto flex flex-row items-center justify-center font-sans p-3 sm:p-4 lg:p-4">
      <div className="relative w-full lg:w-[82%] mx-auto rounded-2xl">
        <div className="flex flex-col lg:flex-row md:flex-row w-full justify-between gap-10">

          {/* Left Text Section */}
          <div className="flex flex-col justify-center max-w-lg">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Insights & Reflections</h1>
            <p className="text-gray-600 text-base">
              Thoughtful reflections, planning tips, and words of comfort — all here to help you feel supported.
            </p>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col md:flex-row lg:flex-row gap-5 w-full md:w-auto">
            {/* Card 1 */}
            <Link to="/posts" className="block w-full md:w-60 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-100 bg-[#d9d9d9] rounded-t-xl"></div>
              <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-800">Post Title</h2>
                <p className="text-sm text-gray-600">Short description of the post or reflection.</p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/posts" className="block w-full md:w-60 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-100 bg-[#d9d9d9] rounded-t-xl"></div>
              <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-800">Another Post</h2>
                <p className="text-sm text-gray-600">Another short snippet or insight preview.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
