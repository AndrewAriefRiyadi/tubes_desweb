// import { useState } from 'react'

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { LanguageProvider } from "../components/hooks/LanguageContext";
import ProductView from "../components/product_view";
import { useParams } from "react-router";

export default function Product() {
    let params = useParams();
    console.log(params.id); 
    return (
        <>
        <LanguageProvider>

        <Navbar />
        <ProductView productId={params.id}/>
        <Footer />
        </LanguageProvider>
        </>
    );
}
