import { Link } from "react-router-dom";
import type { BlogType } from "../../../../lib/definition";
import { formatFullDate } from "../../../../lib/utils";

const Blog = ({ blog, size }: { blog: BlogType; size?: string }) => {
  const { id, title, created_at, tag } = blog;
  const date = formatFullDate(created_at);
  // Create a short excerpt from the first 100 characters of the content

  return (
    <div className={`${size || "w-full"} h-full`}>
      <Link
        to={`/blog/${id}`}
        className="bg-white rounded-xl overflow-hidden h-full flex grow flex-col"
      >
        {/* Image Container - Fixed height */}
        <div className="relative overflow-hidden h-100 bg-gray-50">
          <img
            src={"/img-placeholder.svg"}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container - Fixed height with consistent spacing */}
        <div className="mt-5 flex flex-col">
          <div className="flex text-sm gap-x-2 text-gray-500 mb-2">
            <span className="bg-gray-300 text-gray-800 text-xs font-semibold p-1 rounded-tr-lg">
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              {date}
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 break-words overflow-hidden text-ellipsis">
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
