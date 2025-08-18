import type { ReactNode } from "react";

const CardWrapper = ({
  children,
  width = "w-[90%]",
}: {
  children: ReactNode;
  width?: string;
}) => {
  return (
    <div className={`my-10 ${width} mx-auto flex flex-col justify-center`}>
      {children}
    </div>
  );
};

export default CardWrapper;
