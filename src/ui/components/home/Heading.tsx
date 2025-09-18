const Heading = ({
  heading,
  size = "lg:text-3xl xl:text-4xl md:text-4xl",
  my = "my-2",
  position = "text-left",
}: {
  heading: string;
  size?: string;
  my?: string;
  position?: string;
}) => {
  return (
    <div>
      <h2 className={`${size} font-semibold text-sm sm:text-lg ${position} ${my}`}>
        {heading}
      </h2>
    </div>
  );
};

export default Heading;
5;
