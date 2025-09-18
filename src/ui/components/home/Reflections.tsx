import Heading from "./Heading";
import LinkButton from "./LinkButton";
// import { useEffect, useState } from "react";
import type { BlogType } from "../../../../lib/definition";
import { allBlogs } from "../../../../lib/data";
import Blog from "./Blog";

export default function Reflections() {
  // const [allBlogs, setAllBlog] = useState<BlogData>([])
  // useEffect(() => {
  //   const fetchBlog = async () => {
  //     const blog = await fetch("/api/blog")
  //     const data: BlogData = await blog.json()
  //     setBlog(data)
  //   }
  //   fetchBlog()
  // }, [])

  // 2. Shuffle the remaining products
  const shuffledBlogs = [...allBlogs].sort(() => 0.5 - Math.random());

  // 3. Take the first three products from the shuffled array
  const randomBlog = shuffledBlogs.slice(0, 2);

  return (
    <div className="w-[95%] my-10 relative gap-5 flex lg:w-full lg:flex-row md:flex-col flex-col justify-between items-center mx-auto">
      {/* Left Text Section */}
      <div className="flex flex-col justify-center md:w-full lg:w-[50%] w-[95%] mx-auto">
        <Heading heading="Insights & Reflections" />
        <p className="text-gray-600 text-base my-2">
          Thoughtful reflections, planning tips, and words of comfort — all here
          to help you feel supported.
        </p>
        <LinkButton linktext="Read More" path={"/blog"} />
      </div>

      {/* Cards Section */}
      <div className="w-full flex md:p-0 p-3 lg:p-0 md:flex-row lg:flex-row shrink grow gap-5 md:w-full flex-col-reverse justify-start md:justify-start  xl:justify-end  lg:justify-end size-full">
        {randomBlog.map((blog: BlogType) => (
          <div key={blog.id}>
            <Blog blog={blog} key={blog.id} size="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
