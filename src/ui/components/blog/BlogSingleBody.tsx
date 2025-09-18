import type { BlogType } from "../../../../lib/definition";

interface BlogSingleBodyProps {
  blogBodyData: BlogType;
}

const BlogSingleBody = ({ blogBodyData }: BlogSingleBodyProps) => {
  // Split content into three main paragraphs
  const content = blogBodyData.content || "";
  const totalLength = content.length;
  const sectionLength = Math.floor(totalLength / 3);

  const paragraphs = [
    content.slice(0, sectionLength), // First full-width paragraph
    content.slice(sectionLength, sectionLength * 2), // Second paragraph with floating image
    content.slice(sectionLength * 2), // Third paragraph after full-width image
  ];

  return (
    <div className="space-y-8 text-gray-700 leading-relaxed">
      {/* First paragraph - full width */}
      <div className="mb-8">
        <p>{paragraphs[0]}</p>
      </div>

      {/* Second paragraph with floating image */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <p className="flex-1">{paragraphs[1]}</p>
        {blogBodyData.img && (
          <div className="md:w-1/2 lg:w-1/3">
            <img
              src={blogBodyData.img}
              alt="Blog post"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        )}
      </div>

      {/* Full width image */}
      {blogBodyData.img && (
        <div className="my-8">
          <img
            src={blogBodyData.img}
            alt="Blog post"
            className="w-full h-100 object-cover rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Third paragraph - full width */}
      <div className="mt-8">
        <p>{paragraphs[2]}</p>
      </div>
    </div>
  );
};

export default BlogSingleBody;
