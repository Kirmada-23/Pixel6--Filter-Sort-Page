import { useState, useEffect, useCallback } from "react";
import { fetchUsers } from "../api";

export const useLoadData = (limit) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  //  callback make sure the loadPageData function is memoized and only recreated if limit or page changes.
  const loadPageData = useCallback(
    async (page) => {
      setLoading(true);
      try {
        const response = await fetchUsers(limit, limit * (page - 1));
        if (response && response.users) {
          setData(response.users);
          setTotal(response.total);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [limit]
  );

  useEffect(() => {
    loadPageData(1); // Load initial data only once
  }, [loadPageData]); //  to ensures that the effect runs only when loadPageData is created or updated.

  return { data, loading, error, total, loadPageData };
};
