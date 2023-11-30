// import { useState } from 'react'

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Product_deskripsi from "../components/product_deskripsi";
import ProductView from "../components/product_view";

export default function Product() {
  // const [count, setCount] = useState(0)

    return (
        <>
        <Navbar />
        <ProductView />
        <Footer />
        </>
    );
}
