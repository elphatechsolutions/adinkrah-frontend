import type { BlogType } from "../../../../lib/definition";
import { allBlogs } from "../../../../lib/data";
import BlogSingleHero from "./BlogSingleHero";
import BlogSingleBody from "./BlogSingleBody";
import BlogComment from "./BlogComment";
import Related from "./Related";

interface EachBlogCardProps {
  blogId?: string;
}

const EachBlogCard = ({ blogId }: EachBlogCardProps) => {
  const blogByIdData: BlogType | undefined = allBlogs.find(
    (blog: BlogType) => blog.id === Number(blogId)
  );

  if (!blogByIdData) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="mt-[10vh]">
      <BlogSingleHero blogHeroData={blogByIdData} />
      <BlogSingleBody blogBodyData={blogByIdData} />
      <BlogComment />
      {blogId && <Related blogId={blogId} />}
    </div>
  );
};

export default EachBlogCard;
