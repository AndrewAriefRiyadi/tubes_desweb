// import { useState } from 'react'


import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Checkout from "../components/checkout";

export default function CheckoutPage() {
  // const [count, setCount] = useState(0)

    return (
        <>
        <Navbar />
        <Checkout/>
        <Footer/>
        </>
    );
}
