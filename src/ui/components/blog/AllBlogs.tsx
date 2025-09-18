// import { useState, useEffect } from "react";
import type { BlogData, BlogType } from "../../../../lib/definition";
import Blog from "../home/Blog";
// import Heading from "../../components/home/Heading";

const AllBlogs = ({
  allBlogs,
}: {
  allBlogs: BlogData;
}) => {
  // const [allBlogs, setAllBlogs] = useState<BlogData>([])

  //   useEffect(() => {
  //     const fetchBlog = async () => {
  //       const blog = await fetch("/api/blog");
  //       const data: BlogData = await blog.json();
  //       setAllBlogs(data);
  //     };
  //     fetchBlog();
  //   }, []);

  return (
    <div className="mb-10 md:my-0 lg:my-0">
      {/* <Heading heading="All Blogs" position="text-center" /> */}
      <div className="flex flex-row w-full gap-10 flex-wrap">
        {allBlogs.map((blog: BlogType) => (
          <Blog
            blog={blog}
            size="lg:w-[45%] xl:w-[30%] md:w-[45%] w-[90%] mx-auto"
            key={blog.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
