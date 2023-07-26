import React, { useState, useEffect } from "react";
import Post from "./Post";

const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the current items to display based on the currentPage
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const orderedPosts = currentItems
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div>
      {/* Display the current items */}
      {orderedPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      {/* Render the Pagination component */}
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={pageNumber === currentPage ? "active" : ""}
          >
            <button onClick={() => handlePageClick(pageNumber)}>
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
