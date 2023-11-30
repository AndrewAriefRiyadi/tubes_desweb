// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "./sidebar";
import Product_deskripsi from "./product_deskripsi";

export default function ProductView() {
    return (
        <section class="flex h-auto mx-80">
        <Sidebar />
        <div class="w-10/12 flex-col p-4">
            <p>lklfjgdkflgj / dldkcgjlfdsk / ldkfjgdlf / dklfgj</p>
            <label class="flex gap-4 mt-4">
                <div class="w-1/2 flex-col h-auto">
                    <div class="w-full h-96 bg-gray-300 shadow-md p-4">
                    </div>
                    <div class="flex gap-2">
                        <div class="w-1/3 h-48 bg-gray-500 shadow-md my-2">
                        </div>
                        <div class="w-1/3 h-48 bg-gray-500 shadow-md my-2">
                        </div>
                        <div class="w-1/3 h-48 bg-gray-500 shadow-md my-2">
                        </div>
                    </div>
                </div>
                <div class="w-1/2 flex-col h-auto">
                    <p>*****</p>
                    <div className="flex justify-between">
                        <h1>Nama Barang</h1>
                        <div className="flex gap-2">
                            <p>like</p>
                            <p>share</p>
                        </div>
                    </div>
                    <p className="mt-16">Rp 199.000</p>
                    <p className="mt-6">Warna</p>
                    <div className="flex gap-2 mt-2">
                        <div class="rounded-full h-8 w-8 bg-blue-500"></div>
                        <div class="rounded-full h-8 w-8 bg-blue-700"></div>
                        <div class="rounded-full h-8 w-8 bg-blue-300"></div>
                    </div>
                    <p className="mt-32">Size</p>
                    <div className="flex gap-2 mt-2">
                        <div class=" flex flex-col rounded-full h-8 w-12 border border-black justify-center items-center"><p>XS</p></div>
                        <div class=" flex flex-col rounded-full h-8 w-12 border border-black justify-center items-center"><p>S</p></div>
                        <div class=" flex flex-col rounded-full h-8 w-12 border border-black justify-center items-center"><p>M</p></div>
                        <div class=" flex flex-col rounded-full h-8 w-12 border border-black justify-center items-center"><p>L</p></div>
                    </div>
                    <p className="mt-2">Pilih Ukuran</p>
                    <div className="flex gap-3 mt-16">
                        <p>gambarTruck</p>
                        <p>Pilih Pengiriman</p>
                    </div>
                    <div className="flex gap-3 mt-6">
                        <p>gambarCatatan</p>
                        <p>Catatan</p>
                    </div>
                    <div className="flex gap-3 mt-14">
                        <div className="flex rounded-full h-10 w-1/3 border border-black justify-center items-center gap-10">
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                        <div className="flex rounded-full h-10 w-2/3 border border-black bg-black text-white justify-center items-center gap-4">
                            <p>#</p>
                            <p>Add To Cart</p>
                        </div>
                    </div>
                </div>
            </label>
            <div>
            <Product_deskripsi/>
            </div>
            
        </div>
        
        </section>
    );
}
