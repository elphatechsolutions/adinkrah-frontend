import type { ReactNode } from "react";

const HomeCard = ({
  children,
  width = "w-[90%] lg:w-[80%]",
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
      className={`mt-10 ${width} ${bg} mx-auto flex ${view} justify-center gap-y-5`}
    >
      {children}
    </div>
  );
};

export default HomeCard;
