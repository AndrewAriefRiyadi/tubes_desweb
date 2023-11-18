// import { useState } from 'react'
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CardProduct from "./components/ProductCard/ProductCard";

function App() {
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

export default App;
