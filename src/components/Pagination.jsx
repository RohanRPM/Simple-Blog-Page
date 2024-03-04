/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="my-8 flex items-center justify-center">
      <button
        className={`${
          page > 1 ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
        } text-white py-2 px-4 rounded-l`}
        onClick={() => handlePageChange(page - 1)}
        disabled={page <= 1}
      >
        Previous
      </button>

      <p className="mx-4 text-lg text-gray-700">
        Page {page} of {totalPages}
      </p>

      <button
        className={`${
          page < totalPages ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
        } text-white py-2 px-4 rounded-r`}
        onClick={() => handlePageChange(page + 1)}
        disabled={page >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
