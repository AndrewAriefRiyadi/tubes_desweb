// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function Cart_checkout() {
    return( 
        <div className="flex flex-col gap-4 mb-4  ">
            <h1 className=" font-bold text-xl">Voucher</h1>
            <h1 className=" font-bold text-xl w-12 rounded-lg self-end text-right">L</h1>
            <h1 className=" font-bold text-xl">Ringkasan Belanja</h1>
            <div className="flex justify-between">
                <p>Total Harga (2 Produk)</p>
                <p className=" font-bold">Rp 598.000</p>
            </div>
            <div className="flex justify-between">
                <p>Ongkos Kirim</p>
                <p className=" font-bold">Rp 30.000</p>
            </div>
            <div className="flex justify-between">
                <p>Diskon</p>
                <p className=" font-bold">Rp 0</p>
            </div>
            <div className="h-1 w-auto bg-gray-950"></div>
            <div className="flex justify-between">
                <p className=" font-bold">Total Harga</p>
                <p className=" font-bold">Rp 628.000</p>
            </div>
            <Link to={"/checkout"}>
                <div className="flex rounded-full h-10  border border-black bg-black text-white justify-center items-center gap-4">
                    <img className=" w-fit" src=".\src\assets\cart.png"></img>
                    <p>Checkout</p>
                </div>
            </Link>
        </div>
    );
}