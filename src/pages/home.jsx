// Home.jsx
import React, { useState, useEffect } from 'react';
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProductKartu from "../components/product_kartu";
import ProductFilter from "../components/filter";
import products from "../data"; // Import data produk
import { LanguageProvider } from '../components/hooks/LanguageContext';

export default function Home() {
  const [filterOptions, setFilterOptions] = useState({ category: '', sort: '' });
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const updatedFilteredProducts = filterProducts();
    setFilteredProducts(updatedFilteredProducts);
  }, [filterOptions]);

  const filterProducts = () => {
    let result = [...products];

    if (filterOptions.category) {
      result = result.filter((product) => product.kategori === filterOptions.category);
    }

    if (filterOptions.sort === 'asc') {
      result.sort((a, b) => parseFloat(a.harga) - parseFloat(b.harga));
    } else if (filterOptions.sort === 'desc') {
      result.sort((a, b) => parseFloat(b.harga) - parseFloat(a.harga));
    } else if (filterOptions.sort === 'az') {
      result.sort((a, b) => a.nama.localeCompare(b.nama));
    } else if (filterOptions.sort === 'za') {
      result.sort((a, b) => b.nama.localeCompare(a.nama));
    }

    return result;
  };

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