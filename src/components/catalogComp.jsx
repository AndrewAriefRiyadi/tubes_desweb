// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./sidebar";
import Filter from "./filter";
import ProductKartu from "./product_kartu";
import data from "../data"


const filterProductsByCategory = (products, category) => {
        return category ? products.filter((product) => product.kategori === category) : products;
    };

export default function CatalogComp({category}) {
    const filteredProducts = filterProductsByCategory(data, category);
    console.log('Category:', category);

    return (
        <section class="flex flex-col md:flex-row h-full w-auto">
        <Sidebar />
        <div class="md:w-10/12 flex-col p-4 lg:mr-16">
            <h1 className=" text-sm">Catalog</h1>
            <p className=" font-bold text-xl"> Aktivitas </p>
            <div className=" grid max-md:grid-cols-2 md:grid-cols-4 justify-items-center gap-6 my-10">
                <div>
                    <div className=" rounded-full bg-slate-300 w-32 h-32"></div>
                    <p className=" text-center mt-2"> Aktivitas </p>
                </div>
                <div>
                    <div className=" rounded-full bg-slate-300 w-32 h-32"></div>
                    <p className=" text-center mt-2"> Aktivitas </p>
                </div>
                <div>
                    <div className=" rounded-full bg-slate-300 w-32 h-32"></div>
                    <p className=" text-center mt-2"> Aktivitas </p>
                </div>
                <div>
                    <div className=" rounded-full bg-slate-300 w-32 h-32"></div>
                    <p className=" text-center mt-2"> Aktivitas </p>
                </div>
            </div>
            {/* <Filter/> */}
            <div className=" grid max-md:grid-cols-2 md:grid-cols-3 justify-items-center gap-6 mt-3">
                {filteredProducts.map((product, index) => (
                    <ProductKartu key={index} product={product} />
                ))}
            </div>
            <div className="flex rounded-full mt-4 h-10 w-full border border-black bg-black text-white justify-center items-center gap-4">
                <p>#</p>
                <p>See More</p>
            </div>
        </div>
        </section>
    );
}
