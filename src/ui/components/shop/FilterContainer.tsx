import { useState } from "react";
import FilterButton from "./FilterButton";
import FilterSideBar from "./FilterSiderBar";
import { useSearchParams } from "react-router-dom";

const FilterContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  const handleFilter = (filterTerm: string) => {
    setSearchParams({ filter: filterTerm });
  };
  return (
    <>
      <FilterButton onClick={openSidebar} />
      <FilterSideBar isOpen={isOpen} onClose={closeSidebar} />
    </>
  );
};

export default FilterContainer;
