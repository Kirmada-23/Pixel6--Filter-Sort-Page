import { useState, useEffect } from "react";

export const useFilter = (data) => {
  const [filters, setFilters] = useState({ country: "", gender: "" });
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    let filtered = data;

    // Filtering the selected country
    if (filters.country) {
      filtered = filtered.filter(
        (item) => item.address && item.address.country === filters.country
      );
    }

    // Filtering the selected gender
    if (filters.gender) {
      filtered = filtered.filter((item) => item.gender === filters.gender);
    }

    setFilteredData(filtered);
  }, [data, filters]);

  // On selecting the country and gender, filtering the data
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return { filteredData, handleFilterChange };
};
