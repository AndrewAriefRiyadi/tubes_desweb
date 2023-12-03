// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "./sidebar";
import Product_deskripsi from "./product_deskripsi";
import Rekomendasi from "./rekomendasi";
import Review from "./review";

const data = [
    {
        nama: "Straight Low Jeans",
        harga: "199.000",
        image: "../src/assets/product_view.png",
    },
    {
        nama: "Straight Cargo",
        harga: "199.000",
        image: "../src/assets/product_view.png",
    },
    {
        nama: "Straight Jacket",
        harga: "199.000",
        image: "../src/assets/product_view.png",
    },
    {
        nama: "Straight Low Jeans",
        harga: "199.000",
        image: "../src/assets/product_view.png",
    },
]

export default function CatalogComp() {
    return (
        <section class="flex flex-col md:flex-row h-full w-auto">
        <Sidebar />
        <div class="md:w-10/12 flex-col p-4">
            <h1 className=" text-sm">Catalog / Kategori</h1>
            <p className=" font-bold text-xl"> Aktivitas </p>
            <div className=" grid max-md:grid-cols-2 md:grid-cols-4 justify-items-center gap-6 mt-3">
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
        </div>
        </section>
    );
}
