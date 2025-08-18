const Heading = ({
  heading,
  size,
  position = "text-left",
}: {
  heading: string;
  size: string;
  position?: string;
}) => {
  return (
    <div>
      <h2 className={`${size} font-semibold text-2xl my-2 ${position}`}>
        {heading}
      </h2>
    </div>
  );
};

export default Heading;
5;
