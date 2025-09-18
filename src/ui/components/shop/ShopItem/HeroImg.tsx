const HeroImg = ({ images }: { images: string }) => {
  return (
    <div className="relative w-full h-80 sm:h-96 md:h-[48rem] lg:h-[45rem] xl:h-[42.5rem] overflow-hidden">
      <img
        src={images}
        alt="product-img loading"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroImg;
