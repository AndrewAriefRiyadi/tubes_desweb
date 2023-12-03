// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function Filter({ categories = [], onFilterChange }){
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="flex flex-col md:justify-between md:flex-row md:items-center bg-white mt-5 ml-5">
      <div className="flex">
        <h2 className="md:mr-2 md:text-xs">FILTER</h2>
        <select
          id="dateFilter"
          name="dateFilter"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="mb-2 md:mb-0 md:mr-2 text-xs font-bold"
        >
          <option value="">DATE</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          id="smthngFilter1"
          name="smthngFilter1"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="mb-2 md:mb-0 md:mr-2 text-xs font-bold"
        >
          <option value="">SMTHNG</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          id="smthngFilter2"
          name="smthngFilter2"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="mb-2 md:mb-0 md:mr-2 text-xs font-bold"
        >
          <option value="">SMTHNG</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          id="smthngFilter3"
          name="smthngFilter3"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="mb-2 md:mb-0 md:mr-2 text-xs font-bold"
        >
          <option value="">SMTHNG</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:flex-row md:justify-end md:items-center bg-white">
        <h2 className="mb-2 md:mb-0 md:mr-[10rem] md:text-xs">URUTKAN</h2>
        <select
          id="sortFilter"
          name="sortFilter"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="md:ml-2 text-xs font-bold"
        >
          <option value="">POPULARITAS</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
