import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Example from "../components/ProductCard/Product";
import { LanguageProvider } from "../components/hooks/LanguageContext";

export default function Home() {

  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Carousel />
          <Example />
        {/* <div className="flex flex-wrap justify-between">
          <CardProduct title="Sepatu" harga="$100" />
        <CardProduct title="Sepatu" harga="$100" />
        <CardProduct title="Sepatu" harga="$100" />
        <CardProduct title="Sepatu" harga="$100" />
        <CardProduct title="Sepatu" harga="$100" />
        <CardProduct title="Sepatu" harga="$100" />
        </div> */}
        <Footer />
      </LanguageProvider>
    </>
  );
}


