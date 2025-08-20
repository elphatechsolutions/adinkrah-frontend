import ImageCard from "./ImageCard";

const ImageCards = ({ styling }: { styling?: string }) => {
  return (
    <div
      className={`${styling} flex flex-wrap gap-x-10 w-[95%] mx-auto justify-center items-center`}
    >
      <ImageCard size="w-[calc(50%-20px)] h-80 bg-[#d9d9d9] " />
      <ImageCard size="w-[calc(50%-20px)] h-80 mt-25 bg-[#d9d9d9] " />
      <ImageCard size="w-[calc(50%-20px)] h-70 bg-[#d9d9d9] " />
      <ImageCard size="w-[calc(50%-20px)] h-60 mt-10 bg-[#d9d9d9] " />
    </div>
  );
};

export default ImageCards;
