import { useState } from "react";
import { allBlogs, blogSideBarLinks } from "../../../../lib/data";
import AllBlogs from "./AllBlogs";
import Pagination from "../shop/Pagination";
import FilterSideBar from "../shop/FilterSiderBar";
import FilterButton from "../shop/FilterButton";

const CARDS_PER_PAGE = 6;

const Blogs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const closeSidebar = () => setIsOpen(false);

  const totalPages = Math.ceil(allBlogs.length / CARDS_PER_PAGE);
  const startIdx = (currentPage - 1) * CARDS_PER_PAGE;
  const endIdx = startIdx + CARDS_PER_PAGE;
  const itemsOnPagePerPagine = allBlogs.slice(startIdx, endIdx);

  return (
    <div className="h-auto flex flex-col">
      <FilterButton onClick={() => setIsOpen(true)} />

      {/* Layout: Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar (Sticky and Scrollable)
        <div className="hidden lg:block w-64">
          <div className="sticky top-0 h-screen md:h-200 lg:h-200 filterSideBar overflow-y-auto">
            <FilterSideBar
              isOpen={true}
              onClose={() => {}}
              variant="desktop"
              links={blogSideBarLinks}
            />
          </div>
        </div> */}

        {/* Main Content (Scrollable) */}
        <div className="flex-1">
          <AllBlogs allBlogs={itemsOnPagePerPagine} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page: number) => setCurrentPage(page)}
            onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            onNext={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          />
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      <FilterSideBar
        isOpen={isOpen}
        onClose={closeSidebar}
        links={blogSideBarLinks}
        variant="mobile"
      />
    </div>
  );
};

export default Blogs;
