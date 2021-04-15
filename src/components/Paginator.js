import React, { useState } from 'react';

const Paginator = ({ maxPages, onPageChange }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const handlePagination = (actionValue) => {
    if (actionValue === 'next' && pageNumber <= maxPages + 1) {
      setPageNumber(pageNumber + 1);
      onPageChange(pageNumber + 1);
    }

    if (actionValue === 'prev' && pageNumber >= 1) {
      setPageNumber(pageNumber - 1);
      onPageChange(pageNumber - 1);
    }
  }

  return (
    <div className="row mt-5 justify-content-center">
      <div className="col-md-6 col-sm-12">
        <nav aria-label="pagination">
          <ul className="pagination justify-content-between">
            <li className={`page-item ${pageNumber <= 1 ? 'disabled' : ''}`}>
              <button className="page-link" aria-disabled={pageNumber <= 1} onClick={() => handlePagination('prev')} key="prev">Previous</button>
            </li>
            <span> {pageNumber}/10 </span>
            <li className={`page-item ${pageNumber >= maxPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePagination('next')} key="next">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Paginator;