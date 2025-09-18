type HeroProps = {
  page: "eachPage" | "page";
  pages?: React.ReactNode;
};

const Hero = ({ page, pages }: HeroProps) => {
  return (
    <div>
      {page === "eachPage" && (
        <div className="hero bg-[#d9d9d9] h-[30vh] absolute top-0 w-full">
          {pages}
        </div>
      )}
      {page === "page" && (
        <div className="hero bg-[#d9d9d9] h-[40vh] md:h-[60vh] lg:h-screen absolute top-0 w-full">
          {pages}
        </div>
      )}
    </div>
  );
};

export default Hero;
