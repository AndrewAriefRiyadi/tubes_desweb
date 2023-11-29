// import { useState } from 'react'

import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import CardProduct from "../components/ProductCard/ProductCard";

export default function Tops() {
  // const [count, setCount] = useState(0)
return (
    <>
    <Navbar />
    <Carousel />
    <div className="flex flex-wrap justify-between">
        <CardProduct title="Sepatu" harga="$100" />
        <CardProduct title="Sepatu" harga="$100" />
        <CardProduct title="Sepatu" harga="$100" />
        <CardProduct title="Sepatu" harga="$100" />
        <CardProduct title="Sepatu" harga="$100" />
        <CardProduct title="Sepatu" harga="$100" />
    </div>
    <Footer />
    </>
);
}


