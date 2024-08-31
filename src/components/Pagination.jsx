import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaRightLong } from 'react-icons/fa6';

const Pagination = () => {
  const totalItems = 50;
  const itemsPerPage = 6;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPageNumbers = () => {
    let startPage, endPage;
    if (totalPages <= 7) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= 4) {
      startPage = 1;
      endPage = 7;
    } else if (currentPage + 3 >= totalPages) {
      startPage = totalPages - 6;
      endPage = totalPages;
    } else {
      startPage = currentPage - 3;
      endPage = currentPage + 3;
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={` h-10 font-semibold px-3 py-1 border-t border-b border-orange-500 tablet:hover:bg-orange-300 ${
            currentPage === i ? 'bg-orange-500' : ''
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-8">
      {/* First Button (Previous Page) */}
      <button
        onClick={handlePreviousPage}
        className={` ${currentPage === 1 && "cursor-not-allowed"} h-10 px-3 py-1 border border-orange-500 rounded-l-md tablet:hover:bg-orange-300`}
        disabled={currentPage === 1}
      >
        <FaAngleLeft/>
      </button>

      {/* Page Numbers */}
      {renderPageNumbers()}

      {/* Last Button (Next Page) */}
      <button
        onClick={handleNextPage}
        className={`${currentPage === totalPages && "cursor-not-allowed"} h-10 px-3 py-1 border border-orange-500 rounded-r-md tablet:hover:bg-orange-300`}
        disabled={currentPage === totalPages}
      >
        <FaAngleRight/> 
      </button>
    </div>
  );
};

export default Pagination;
