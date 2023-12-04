import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Example from "../components/ProductCard/Product";
import { LanguageProvider } from "../components/hooks/LanguageContext";

export default function Coba() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Example />

        <Footer />
      </LanguageProvider>
    </>
  );
}
