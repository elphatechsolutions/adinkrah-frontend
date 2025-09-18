import { useParams } from "react-router-dom";
import CardWrapper from "../ui/components/CardWrapper";
import Hero from "../ui/components/Hero";
import EachBlogCard from "../ui/components/blog/EachBlogCard";

const EachBlogPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <section id="eachBlog">
      {/* Hero section below the navbar */}
      <Hero page="eachPage" />

      <CardWrapper
        width="w-[95%] max-w-7xl"
        className="pt-[20vh] mt-10 lg:pt-[20vh] px-4 sm:px-6 lg:px-8"
        page="eachPage"
      >
        <EachBlogCard blogId={id} />
      </CardWrapper>
    </section>
  );
};

export default EachBlogPage;
