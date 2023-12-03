// eslint-disable-next-line no-unused-vars
import React from "react";
import ProductKartu from "./product_kartu";
import Data from "../data"

export default function Rekomendasi() {
    return( 
        <div className="flex flex-col h-auto mt-16 gap-1 ">
            <p className=" font-bold text-xl">Rekomendasi</p>
            <div className="flex gap-4">
                {Data.slice(0, 3).map((product) => (
                    <ProductKartu key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}