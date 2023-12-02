// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function ProductKartu() {
    return( 
        <div className="flex flex-col gap-1 ">
            <Link to={"/product"}>
                <img
                className="object-cover"
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="product image"
                />
            </Link>
            
            <div class="flex justify-between">
                <p>Produk</p>
                <div class="flex gap-1">
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                </div>
            </div>
            <div class="flex justify-between text-xs">
                <p>$10.00</p>
                <p>1 Terjual</p>
            </div>
        </div>
    )
}