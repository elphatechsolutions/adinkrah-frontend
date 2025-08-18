import type { ReactNode } from "react";

const Pagewrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col pt-[60vh] lg:pt-[90vh]">
      {children}
    </div>
  );
};

export default Pagewrapper;
