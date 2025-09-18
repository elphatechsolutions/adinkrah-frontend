import { allBlogs } from "../../../../lib/data";
import Blog from "../home/Blog";
import type { BlogType } from "../../../../lib/definition";

const Related = ({ blogId }: { blogId: string }) => {
  const numericBlogId = blogId ? parseInt(blogId, 10) : null;

  // Get current blog's tag to find related articles
  const currentBlog = allBlogs.find(
    (blog: BlogType) => blog.id === numericBlogId
  );
  const currentTag = currentBlog?.tag;

  // Get related blogs (excluding current blog)
  const relatedBlogs = allBlogs
    .filter(
      (blog: BlogType) => blog.tag === currentTag && blog.id !== numericBlogId
    )
    .slice(0, 3); // Limit to 3 related articles

  if (!relatedBlogs.length) return null; // Don't show if no related articles

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Related Articles
        </h2>
        <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedBlogs.map((blog: BlogType) => (
          <div
            key={blog.id}
            className="group transition-transform duration-300 hover:scale-[1.02]"
          >
            <Blog blog={blog} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Related;
