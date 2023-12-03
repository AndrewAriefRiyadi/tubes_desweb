// import { useState } from 'react'
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import CatalogComp from "../components/catalogComp";
import { useParams } from "react-router-dom";
import { LanguageProvider } from "../components/hooks/LanguageContext";

export default function CatalogPage() {
  // const [count, setCount] = useState(0)
    const { category } = useParams();
    return (
      <>
        <LanguageProvider>
          <Navbar />
          <CatalogComp category={category} />
          <Footer />
        </LanguageProvider>
      </>
    );
}
