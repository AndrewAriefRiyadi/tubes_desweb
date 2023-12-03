import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import CardProduct from "../components/ProductCard/ProductCard";
import { LanguageProvider } from "../components/hooks/LanguageContext";

export default function Home() {

  return (
    <>
      <LanguageProvider>
      <Navbar />
      <Carousel />
      <div className="flex flex-wrap justify-between">
        <CardProduct title="Sepatu" harga="$100" id_prod={0}/>
        <CardProduct title="Sepatu" harga="$100" id_prod={0}/>
        <CardProduct title="Sepatu" harga="$100" id_prod={0}/>
        <CardProduct title="Sepatu" harga="$100" id_prod={0}/>
        <CardProduct title="Sepatu" harga="$100" id_prod={0}/>
        <CardProduct title="Sepatu" harga="$100" id_prod={0}/>
      </div>
      <Footer />
      </LanguageProvider>
    </>
  );
}


