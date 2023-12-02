// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "./sidebar";
import Product_deskripsi from "./product_deskripsi";
import Rekomendasi from "./rekomendasi";

const data = {
    nama: "Straight Low Jeans",
    harga: "199.000",
    image: "./src/assets/product_view.png",
}

export default function ProductView() {
    return (
        <section class="flex flex-col md:flex-row h-full w-auto">
        <Sidebar />
        <div class="md:w-10/12 flex-col p-4">
            <p>lklfjgdkflgj / dldkcgjlfdsk / ldkfjgdlf / dklfgj</p>
            <label class="flex flex-col md:flex-row w-auto gap-4 mt-4 ">
                <div class="md:w-1/2 flex justify-center">
                    <img className="" src={data.image}></img>
                </div>
                <div class="flex flex-col h-auto justify-between md:w-1/2 max-md:gap-3 md:mr-4">
                    <div>
                        <img className=" w-fit" src=".\src\assets\stars.png"></img>
                        <div className="flex justify-between">
                            <h1 className=" font-bold text-xl">{data.nama}</h1>
                            <div className="flex gap-2">
                                <img className=" w-fit" src=".\src\assets\heart.png"></img>
                                <img className=" w-fit" src=".\src\assets\share.png"></img>
                            </div>
                        </div>
                    </div>
                    <p className=" font-bold text-xl">{data.harga}</p>
                    <div>
                        <p className="">Warna</p>
                        <div className="flex gap-2">
                            <div class="rounded-full h-8 w-8 bg-blue-500"></div>
                            <div class="rounded-full h-8 w-8 bg-blue-700"></div>
                            <div class="rounded-full h-8 w-8 bg-blue-300"></div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                        <p className="">Size</p>
                        <div className="flex gap-2">
                            <div class=" flex flex-col rounded-full h-8 w-12 border border-black justify-center items-center"><p>XS</p></div>
                            <div class=" flex flex-col rounded-full h-8 w-12 border border-black justify-center items-center"><p>S</p></div>
                            <div class=" flex flex-col rounded-full h-8 w-12 border border-black justify-center items-center"><p>M</p></div>
                            <div class=" flex flex-col rounded-full h-8 w-12 border border-black justify-center items-center"><p>L</p></div>
                        </div>
                        <p className="">Pilih Ukuran</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3">
                            <img className=" w-fit" src=".\src\assets\pengiriman.png"></img>
                            <p className=" self-center">Pilih Pengiriman</p>
                        </div>
                        <div className="flex gap-3">
                        <img className=" w-fit" src=".\src\assets\catatan.png"></img>
                            <p className=" self-center">Catatan</p>
                        </div>
                    </div>
                    <div className="flex gap-3 ">
                        <div className="flex rounded-full h-10 w-1/3 border border-black justify-center items-center gap-10">
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                        <div className="flex rounded-full h-10 w-2/3 border border-black bg-black text-white justify-center items-center gap-4">
                            <img className=" w-fit" src=".\src\assets\cart.png"></img>
                            <p>Add To Cart</p>
                        </div>
                    </div>
                </div>
            </label>
            <div>
            <Product_deskripsi/>
            </div>
            <div>
            <Rekomendasi/>
            </div>
            <div>
            <Rekomendasi/>
            </div>
            <div className="flex rounded-full mt-4 h-10 w-full border border-black bg-black text-white justify-center items-center gap-4">
                <p>#</p>
                <p>See More</p>
            </div>
            
        </div>
        
        </section>
    );
}
