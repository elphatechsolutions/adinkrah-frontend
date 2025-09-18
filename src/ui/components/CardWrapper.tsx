import type { ReactNode, HTMLAttributes } from "react";

interface CardWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  width?: string;
  pt?: string;
  ptMd?: string;
  ptLg?: string;
  page?: "eachPage" | "page";
}

const CardWrapper = ({
  page,
  children,
  width = "w-[90%]",
  pt = "pt-[30vh]",
  ptMd = "md:pt-[50vh]",
  ptLg = "lg:pt-[90vh]",
  className = "",
}: CardWrapperProps) => {
  if (page === "eachPage") {
    return (
      <div
        className={`${width} mx-auto flex flex-col justify-center ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`${width} mx-auto flex flex-col justify-center ${pt} ${ptMd} ${ptLg} ${className}`}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
