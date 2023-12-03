// import { useState } from 'react'


import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Checkout from "../components/checkout";
import { LanguageProvider } from "../components/hooks/LanguageContext";

export default function CheckoutPage() {
  // const [count, setCount] = useState(0)

    return (
        <>
        <LanguageProvider>

        <Navbar />
        <Checkout/>
        <Footer/>
        </LanguageProvider>
        </>
    );
}
