import React, { useState } from "react";

export const Pagination = () => {
  const [itemsPerPage, setItemsPerPage] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 16;

  // Update items per page
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(e.target.value);
  };

  // Go to a specific page
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-between py-4 bg-white text-gray-700">
      {/* Items per page */}
      <div className="flex items-center space-x-2">
        <span>Showing</span>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="border bg-gray-200 items-center border-gray-300 px-2 py-1 rounded focus:outline-none w-[70px]"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span>out of 100</span>
      </div>

      {/* Pagination */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 py-1 rounded bg-gray-200 ${
            currentPage === 1 ? "text-gray-400" : "hover:bg-gray-200"
          }`}
        >
          &lt;
        </button>

        {[1, 2, 3, "...", 15, 16].map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            disabled={page === "..."}
            className={`px-3 py-1 rounded ${
              currentPage === page
                ? "bg-gray-200 text-blue"
                : "hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 rounded bg-gray-200 ${
            currentPage === totalPages ? "text-gray-400" : "hover:bg-gray-200"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
