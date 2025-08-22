import { Link } from "react-router-dom";
import Heading from "./Heading";
import LinkButton from "./LinkButton";
import { useEffect, useState } from "react";
import type { BlogType, BlogData } from "../../../../lib/definition";
import Blog from "./Blog";

export default function Reflections() {
  const [blogs, setBlog] = useState<BlogData>([])
  useEffect(() => {
    const fetchBlog = async () => {
      const blog = await fetch("/api/blog")
      const data: BlogData = await blog.json()
      setBlog(data)
    }
    fetchBlog()
  }, [])

  const startIndex = Math.floor(Math.random() * blogs.length);
  const randomBlog = blogs.slice(startIndex, startIndex + 2);
  return (
    <div className="w-[95%] my-20 lg:mt-20 relative flex lg:w-full lg:flex-row md:flex-row flex-col justify-between items-center mx-auto gap-20">

      {/* Left Text Section */}
      <div className="flex flex-col gap-y-10 justify-center md:w-[20%] lg:w-[30%] w-[95%] mx-auto">
        <Heading heading="Insights & Reflections" />
        <p className="text-gray-600 text-base">
          Thoughtful reflections, planning tips, and words of comfort — all here to help you feel supported.
        </p>
        <LinkButton />
      </div>

      {/* Cards Section */}
      <div className="w-full flex flex-col md:flex-row lg:flex-row gap-5 md:w-auto justify-between grow size-full">
        {randomBlog.map((blog: BlogType) => (
          <Link to={`blog${blog.id}`} key={blog.id}>
            <Blog blog={blog} key={blog.id} />
          </Link>
        ))}
      </div>
    </div>
  );
}
