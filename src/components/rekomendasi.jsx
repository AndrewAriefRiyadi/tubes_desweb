// eslint-disable-next-line no-unused-vars
import React from "react";
import ProductKartu from "./product_kartu";

export default function Rekomendasi() {
    return( 
        <div className="flex flex-col h-auto mt-16 gap-1 ">
            <p>Rekomendasi</p>
            <div className="flex justify-center gap-4">
                <ProductKartu/>
                <ProductKartu/>
                <ProductKartu/>
            </div>
        </div>
    );
}