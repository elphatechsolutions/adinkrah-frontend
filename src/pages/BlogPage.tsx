import Blogs from "../ui/components/blog/Blogs";
import CardWrapper from "../ui/components/CardWrapper";
import Hero from "../ui/components/Hero";

const BlogPage = () => {
  return (
    <section id="blog">
      {/* Hero section below the navbar */}
      <Hero page="page" />
      <CardWrapper width="lg:w-[90%] xl:w-[60%] md:w-[90%] w-[80%]" page="page">
        <Blogs />
      </CardWrapper>
    </section>
  );
};

export default BlogPage;
