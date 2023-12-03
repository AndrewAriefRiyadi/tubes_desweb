// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const ProductFilter = ({ categories = [], onFilterChange }) => {
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
    <div className="flex flex-col md:justify-end md:flex-row md:items-center bg-white mt-5 ml-5">
      <div className="flex flex-col md:flex-row md:justify-end md:items-center bg-white">
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
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
