import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onPrev,
  onNext,
}) => (
  <div className="flex items-center justify-center gap-2 mt-4">
    <button
      onClick={onPrev}
      disabled={currentPage === 1}
      className="px-2 py-1 border rounded"
      aria-label="Previous page"
    >
      ←
    </button>
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i + 1}
        onClick={() => onPageChange(i + 1)}
        className={`px-2 py-1 border rounded ${currentPage === i + 1 ? "bg-black text-white" : ""}`}
      >
        {i + 1}
      </button>
    ))}
    <button
      onClick={onNext}
      disabled={currentPage === totalPages}
      className="px-2 py-1 border rounded"
      aria-label="Next page"
    >
      →
    </button>
  </div>
);

export default Pagination;