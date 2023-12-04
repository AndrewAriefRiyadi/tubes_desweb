/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Sidebar from "./sidebar";
import Product_deskripsi from "./product_deskripsi";
import Rekomendasi from "./rekomendasi";
import Review from "./review";
import data from "../data"
import { Link } from "react-router-dom";
import DataCart from "../data_cart";



export default function ProductView({productId}) {
    function addToCart(){
        console.log("add to cart")
        DataCart.push(data[productId]);
    };
    setCart([...cart, newProduct]);
    console.log(cart);

  return (
    <section className="flex flex-col md:flex-row h-full w-auto">
      <Sidebar />
      <div className="md:w-10/12 flex-col p-4">
        <p>lklfjgdkflgj / dldkcgjlfdsk / ldkfjgdlf / dklfgj</p>
        <label className="flex flex-col md:flex-row w-auto gap-4 mt-4 ">
          <div className="md:w-1/2 flex justify-center">
            <img className="w-fit" src={data[productId].image}></img>
          </div>
          <div className="flex flex-col h-auto justify-between md:w-1/2 max-md:gap-3 md:mr-4">
            <div>
              <img className=" w-fit" src="..\src\assets\stars.png"></img>
              <div className="flex justify-between">
                <h1 className=" font-bold text-xl">{data[productId].nama}</h1>
                <div className="flex gap-2">
                  <img className=" w-fit" src="..\src\assets\heart.png"></img>
                  <img className=" w-fit" src="..\src\assets\share.png"></img>
                </div>
              </div>
            </div>
            <p className=" font-bold text-xl">{data[productId].harga}</p>
            <div>
              <p className="">Warna</p>
              <div className="flex gap-2">
                <div className="rounded-full h-8 w-8 bg-blue-500"></div>
                <div className="rounded-full h-8 w-8 bg-blue-700"></div>
                <div className="rounded-full h-8 w-8 bg-blue-300"></div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="">Size</p>
              <div className="flex gap-2">
                <div className=" flex flex-col rounded-full h-8 w-12 border border-black justify-center items-center">
                  <p>XS</p>
                </div>
                <div className=" flex flex-col rounded-full h-8 w-12 border border-black justify-center items-center">
                  <p>S</p>
                </div>
                <div className=" flex flex-col rounded-full h-8 w-12 border border-black justify-center items-center">
                  <p>M</p>
                </div>
                <div className=" flex flex-col rounded-full h-8 w-12 border border-black justify-center items-center">
                  <p>L</p>
                </div>
              </div>
              <p className="">Pilih Ukuran</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <img
                  className=" w-fit"
                  src="..\src\assets\pengiriman.png"
                ></img>
                <p className=" self-center">Pilih Pengiriman</p>
              </div>
              <div className="flex gap-3">
                <img className=" w-fit" src="..\src\assets\catatan.png"></img>
                <p className=" self-center">Catatan</p>
              </div>
            </div>
            <div className="flex gap-3 ">
              <div className="flex rounded-full h-10 w-1/3 border border-black justify-center items-center gap-10">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
              <div
                onClick={addToCart}
                className="flex rounded-full h-10 w-2/3 border border-black bg-black text-white justify-center items-center gap-4"
              >
                <img className=" w-fit" src="..\src\assets\cart.png"></img>
                <p>Add To Cart</p>
              </div>
            </div>
          </div>
        </label>
        <div>
          <Product_deskripsi />
        </div>
        <div>
          <Review />
        </div>
        <div>
          <Rekomendasi />
        </div>
        <div>
          <Rekomendasi />
        </div>
        <div className="flex rounded-full mt-6 h-10 w-full border border-black bg-black text-white justify-center items-center gap-4">
          <p>#</p>
          <p>See More</p>
        </div>
      </div>
    </section>
  );
}
