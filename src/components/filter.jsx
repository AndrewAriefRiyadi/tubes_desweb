// filter.jsx
import React, { useState } from "react";

const ProductFilter = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilterChange({ category, sort: selectedSort });
  };

  const handleSortChange = (event) => {
    const sort = event.target.value;
    setSelectedSort(sort);
    onFilterChange({ category: selectedCategory, sort });
  };

  return (
    <div className="flex flex-col md:justify-start md:flex-row md:items-center bg-white my-5 md:mx-16 mx-4">
      <h2 className="md:mb-0 md:mr-[4.4rem] md:text-xs">URUTKAN</h2>
      <select
        id="sortFilter"
        name="sortFilter"
        value={selectedSort}
        onChange={handleSortChange}
        className="md:ml-2 text-xs font-bold"
      >
        <option value="">POPULARITAS</option>
        <option value="asc">HARGA TERENDAH</option>
        <option value="desc">HARGA TERTINGGI</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
    </div>
  );
};

export default ProductFilter;
