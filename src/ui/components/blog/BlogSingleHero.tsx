import type { BlogType } from "../../../../lib/definition";
import { formatFullDate } from "../../../../lib/utils";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
interface BlogSingleHeroProps {
  blogHeroData: BlogType;
}

const BlogSingleHero = ({ blogHeroData }: BlogSingleHeroProps) => {
  const { tag, title, author, created_at } = blogHeroData;
  const date = formatFullDate(created_at);

  return (
    <div>
      <Link
        to="/blog"
        className="absolute left-0 top-0 ml-5 z-50 transition-colors rounded-full m-4"
      >
        {" "}
        <div className="flex justify-center items-center gap-2">
          <RiArrowGoBackLine className="w-8 h-8 border-2 p-2 border-white rounded-2xl" />
          <span className="text-base">Back</span>
        </div>
      </Link>
      <div className="absolute top-[15vh] -translate-y-1/2 inset-0 flex items-center justify-center w-full h-full">
        <div className="max-w-4xl w-full relative">
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-base lg:text-3xl font-semibold">
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </p>
            {/* <img src={img} alt={title} className="w-full h-auto" /> */}
            <h2 className="lg:text-3xl xl:text-4xl text-base text-center font-semibold">
              {title}
            </h2>
            <div className="flex gap-x-2 justify-center items-center">
              <p className="lg:text-2xl text-base ">
                <BsPerson className="inline-block mr-2 text-2xl" />
                {author.name}
              </p>{" "}
              |{" "}
              <p className="flex items-center lg:text-2xl text-base">
                <svg
                  className="w-4 h-4 mr-2 flex-shrink-0"
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingleHero;
