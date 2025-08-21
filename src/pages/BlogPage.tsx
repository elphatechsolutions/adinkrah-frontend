import Pagewrapper from "./Pagewrapper";
import Blogs from "../ui/components/blog/Blogs";
import CardWrapper from "../ui/components/CardWrapper";

const BlogPage = () => {
  return (
    <Pagewrapper>
      <CardWrapper width="w-[95%]">
        <Blogs />
      </CardWrapper>
    </Pagewrapper>
  );
};

export default BlogPage;
