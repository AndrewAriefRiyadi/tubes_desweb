import React from "react";
import { Link } from "react-router-dom";

const ProductKartu = ({ product }) => {
    const { id, nama, harga, image, image_small, kategori } = product;
    console.log(id)
    return (
        <div className="flex flex-col gap-1">
            <Link to={`/product/${id}`}>
                <div className="flex justify-center">
                    <img src={image_small} alt={nama} />
                </div>
            </Link>
            <div className="flex justify-between gap-4">
                <p className=" text-sm">{nama}</p>
                <div className="flex gap-1">
                    <p className=" text-sm">S</p>
                    <p className=" text-sm">M</p>
                    <p className=" text-sm">L</p>
                </div>
            </div>
            <div className="flex justify-between text-xs">
                <p>Rp {harga}</p>
                <p>1 Terjual</p>
            </div>
        </div>
    );
};

export default ProductKartu;
