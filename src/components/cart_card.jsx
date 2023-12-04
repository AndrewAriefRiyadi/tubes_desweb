// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

export default function Cart_card({ cartProducts }) {
    return cartProducts.map((product) => (
        <div className="flex flex-col md:flex-row gap-2 justify-between" key={product.id}>
            <img className="w-fit" src={product.image_small} alt={product.nama} />
            <div className="md:flex md:flex-col">
                <div className="md:flex md:justify-between">
                    <h1 className="font-bold text-xl">{product.nama}</h1>
                </div>
                <div className="flex gap-3">
                    <h1 className="font-bold">Warna:</h1>
                    <h1 className="">Putih</h1>
                </div>
                <div className="flex gap-3">
                    <h1 className="font-bold">Size:</h1>
                    <h1 className="">XL</h1>
                </div>
            </div>

            <div className="md:flex md:flex-col gap-5">
                <h1 className="font-bold text-xl">{product.harga}</h1>
                <div className="flex flex-col w-full justify-center self-end">
                    <div className="flex rounded-full h-10 w-full border p-2 border-black justify-center items-center gap-10">
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                    </div>
                </div>
            </div>
            <img className="w-fit h-fit" src=".\src\assets\trash.png" alt="Hapus produk" />
        </div>
    ));
}
Cart_card.handleAddToCart = (product) => {
    
};
