import { useState, useEffect } from "react";

export const useSort = (data) => {
  //   const [sortKey, setSortKey] = useState("id");
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    if (!sortKey) {
      setSortedData(data);
      return;
    }

    // using spread operator so the orginal array is not mutuated
    const sorted = [...data].sort((a, b) => {
      let aKey, bKey;
      if (sortKey === "name") {
        aKey = `${a.firstName} ${a.middleName || ""} ${a.lastName}`;
        bKey = `${b.firstName} ${b.middleName || ""} ${b.lastName}`;
      } else if (sortKey === "age") {
        aKey = a.age;
        bKey = b.age;
      } else {
        aKey = a[sortKey];
        bKey = b[sortKey];
      }
      if (aKey < bKey) {
        return sortOrder === "asc" ? -1 : 1; //  sort a < b then it return the descending order for 1
      }
      if (aKey > bKey) {
        return sortOrder === "asc" ? 1 : -1;

        // if the sort a > b then it return the descending order for -1
      }
      return 0;
    });

    setSortedData(sorted);
  }, [data, sortKey, sortOrder]);

  // sorting the data on clicking the icon
  const handleSort = (key) => {
    const order = sortKey === key && sortOrder === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortOrder(order);
  };

  return { sortedData, handleSort, sortKey, sortOrder };
};
