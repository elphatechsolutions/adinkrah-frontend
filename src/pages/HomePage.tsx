import Arrangement from "../ui/components/home/Arrangement";
import FAQ from "../ui/components/home/FAQ";
import Honor from "../ui/components/home/Honor";
import ImageCards from "../ui/components/home/ImageCards";
import Images from "../ui/components/home/Images";
import Steps from "../ui/components/home/Steps";
import Testimonials from "../ui/components/home/Testimonials";
import Pagewrapper from "./Pagewrapper";
import Reflections from "../ui/components/home/Reflections";

const HomePage = () => {
  return (
    <Pagewrapper>
      {/*large styles*/}
      <div className="flex flex-col lg:flex-row lg:gap-10 lg:w-[80%] mx-auto">
        <ImageCards />
        <Honor />
      </div>
      {/* large styles */}
      <div className="flex flex-col lg:flex-col lg:gap-10 lg:w-[80%] w-full mx-auto">
        <Arrangement />
      </div>
      <Images />
      <Steps />
      <Testimonials />
      <div className="flex flex-col lg:gap-10 lg:w-[80%] w-full mx-auto">
        <FAQ />
      </div>
      <Reflections />
    </Pagewrapper>
  );
};

export default HomePage;
