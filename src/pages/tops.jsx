// import { useState } from 'react'

import Carousel from "../components/Carousel/Carousel";
import Filter from "../components/Filter/Filter";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ListProduk from "../components/ProductCard/ListProduk";
// import CardProduct from "../components/ProductCard/ProductCard";

export default function Tops() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="flex px-16 justify-around py-10">
        <Filter />
        <ListProduk />
        {/* <div>
          <div className="flex flex-wrap justify-between">
            <CardProduct title="Sepatu" harga="$100" />
            <CardProduct title="Sepatu" harga="$100" />
            <CardProduct title="Sepatu" harga="$100" />
            <CardProduct title="Sepatu" harga="$100" />
            <CardProduct title="Sepatu" harga="$100" />
            <CardProduct title="Sepatu" harga="$100" />
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}
