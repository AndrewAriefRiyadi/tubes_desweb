// import { useState } from 'react'


import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import CatalogComp from "../components/catalogComp";
import Checkout from "../components/checkout";

export default function CatalogPage() {
  // const [count, setCount] = useState(0)

    return (
        <>
        <Navbar />
        <CatalogComp/>
        <Footer/>
        </>
    );
}
