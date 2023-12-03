// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Cart_card({product}) {
    const { id, nama, harga, image, image_small, kategori } = product;
    return( 
        <div className="flex flex-col md:flex-row gap-2 justify-between">
            <img className="w-fit" src={image_small}></img>
            <div className="md:flex md:flex-col">
                <div className="md:flex md:justify-between">
                    <h1 className=" font-bold text-xl">{nama}</h1>
                    
                </div>
                <div className="flex gap-3">
                        <h1 className=" font-bold">Warna:</h1>
                        <h1 className="">Putih</h1>
                </div>
                <div className="flex gap-3">
                        <h1 className=" font-bold">Size:</h1>
                        <h1 className="">XL</h1>
                </div>
                
                
            </div>
            
            <div className="md:flex md:flex-col gap-5">
                <h1 className=" font-bold text-xl">{harga}</h1>
                <div className="flex flex-col w-full justify-center self-end">
                    <div className="flex rounded-full h-10 w-full border border-black justify-center items-center gap-10">
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                    </div>
                </div>
            </div>
            <img className="w-fit h-fit" src=".\src\assets\trash.png"></img>
        </div>
    );
}