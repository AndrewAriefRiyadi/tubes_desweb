// import { useState } from 'react'


import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/cart";

export default function CartPage() {
  // const [count, setCount] = useState(0)

    return (
        <>
        <Navbar />
        <Cart/>
        <Footer/>
        </>
    );
}
