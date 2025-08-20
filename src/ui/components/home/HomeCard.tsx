import type { ReactNode } from "react";

const HomeCard = ({
  children,
  width = "w-[95%] lg:w-[80%]",
  bg,
  view,
}: {
  children: ReactNode;
  width?: string;
  small?: string;
  bg?: string;
  view?: string;
}) => {
  return (
    <div
      className={`mt-10 ${width} ${bg} mx-auto flex ${view} justify-center`}
    >
      {children}
    </div>
  );
};

export default HomeCard;
