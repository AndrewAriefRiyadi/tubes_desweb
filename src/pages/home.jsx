// import { useState } from 'react'

import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import CardProduct from "../components/ProductCard/ProductCard";
import ProductKartu from "../components/product_kartu";
import ProductFilter from "../components/filter";

export default function Home() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Carousel /> 
      <ProductFilter />
      <div className="flex flex-wrap justify-between">
        <CardProduct title="Sepatu" harga="$100" id_prod={0}/>
        <CardProduct title="Sepatu" harga="$100" id_prod={0}/>
        <CardProduct title="Sepatu" harga="$100" id_prod={0}/>
        <CardProduct title="Sepatu" harga="$100" id_prod={0}/>
        <CardProduct title="Sepatu" harga="$100" id_prod={0}/>
        <CardProduct title="Sepatu" harga="$100" id_prod={0}/>
      </div>
      <Footer />
    </>
  );
}


