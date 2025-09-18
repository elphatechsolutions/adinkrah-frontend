const AsideImages = ({ images }: { images: string[] }) => {
  return (
    <div className="container w-full flex mx-auto justify-between md:flex-row xl:flex-col gap-2 p-2">
      {images.map((image, index) => (
        <div
          key={index}
          className="flex-1 flex justify-between items-center overflow-hidden w-full"
        >
          <img
            src={image}
            className="block w-full object-contain"
            alt={`image-${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default AsideImages;
