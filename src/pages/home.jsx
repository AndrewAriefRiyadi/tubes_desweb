// Home.jsx
import React, { useState, useEffect } from 'react';
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { LanguageProvider } from "../components/hooks/LanguageContext";
import ProductFilter from "../components/filter";
import products from "../data"; // Import data produk

export default function Home() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <LanguageProvider>
      <Navbar />
      <Carousel />
      <ProductFilter onFilterChange={setFilterOptions} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-between md:mx-16 mx-4">
        {filteredProducts.map((product) => (
          <ProductKartu key={product.id} product={product} />
        ))}
      </div>
      <Footer />
      </LanguageProvider>
    </>
  );
}