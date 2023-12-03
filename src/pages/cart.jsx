// import { useState } from 'react'

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/cart";
import { LanguageProvider } from "../components/hooks/LanguageContext";

export default function CartPage() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Cart />
        <Footer />
      </LanguageProvider>
    </>
  );
}
