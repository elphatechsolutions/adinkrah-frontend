import Arrangement from "../ui/components/home/Arrangement";
// import FAQ from "../ui/components/home/FAQ";
import Honor from "../ui/components/home/Honor";
import ImageCards from "../ui/components/home/ImageCards";
import Images from "../ui/components/home/Images";
import Steps from "../ui/components/home/Steps";
import Testimonials from "../ui/components/home/Testimonials";
import Reflections from "../ui/components/home/Reflections";
import Hero from "../ui/components/Hero";
import CardWrapper from "../ui/components/CardWrapper";
import FAQ from "../ui/components/home/FAQ";
const HomePage = () => {
  return (
    <main id="home">
      {/* Hero section below the navbar */}
      <Hero page="page" />
      {/*large styles*/}
      <CardWrapper width="w-full" page="page">
        <div className="flex flex-col lg:flex-row lg:gap-5 lg:w-[90%] mx-auto">
          <ImageCards />
          <Honor />
        </div>
        {/* large styles */}
        <div className="flex flex-col lg:flex-col lg:gap-5 lg:w-[80%] w-full mx-auto">
          <Arrangement />
        </div>
        <Images />
        <Steps />

        <Testimonials />
        <div className="flex flex-col lg:gap-5 lg:w-[80%] w-full mx-auto">
          <FAQ />
        </div>
        <div className="flex flex-col lg:gap-5 lg:w-[80%] w-full mx-auto">
          <Reflections />
        </div>
      </CardWrapper>
    </main>
  );
};

export default HomePage;
