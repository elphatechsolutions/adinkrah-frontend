import { Link } from "react-router-dom";
import Heading from "./Heading";

export default function Reflections() {
  return (
    <div className="w-[95%] my-20 lg:mt-20 relative flex lg:w-full lg:flex-row md:flex-row flex-col justify-between items-center mx-auto gap-20">

      {/* Left Text Section */}
      <div className="flex flex-col justify-center">
        <Heading heading="Insights & Reflections" size="lg:text-4xl xl:text-6xl md:text-4xl"
        />
        <p className="text-gray-600 text-base">
          Thoughtful reflections, planning tips, and words of comfort — all here to help you feel supported.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row lg:flex-row gap-5 md:w-auto grow size-full">
        {/* Card 1 */}
        <Link to="/posts" className="block w-full md:w-60 grow bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="h-100 bg-[#d9d9d9] rounded-t-xl"></div>
          <div className="p-4">
            <h2 className="font-semibold text-lg text-gray-800">Post Title</h2>
            <p className="text-sm text-gray-600">Short description of the post or reflection.</p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/posts" className="block w-full grow md:w-60 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="h-100 bg-[#d9d9d9] rounded-t-xl"></div>
          <div className="p-4">
            <h2 className="font-semibold text-lg text-gray-800">Another Post</h2>
            <p className="text-sm text-gray-600">Another short snippet or insight preview.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
