import { useState, useEffect } from "react";

export const usePagination = (total, limit) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(total / limit); // returns the pages in the data

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [totalPages, page]);

  return { page, setPage, totalPages };
};
