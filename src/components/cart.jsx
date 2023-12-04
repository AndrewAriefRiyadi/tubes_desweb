// eslint-disable-next-line no-unused-vars
import React from "react";
import Cart_card from "./cart_card";
import Cart_checkout from "./cart_checkout";
import dataCart from "../data_cart";

export default function Cart() {
  return (
    <div className="flex flex-col mt-16 gap-1 mx-4 md:mx-10 lg:mx-16 mb-16">
      <p>Dashboard / Cart</p>
      <p className="font-bold text-xl">Cart</p>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col md:w-2/3 gap-5">
          <Cart_card cartProducts={dataCart} />
        </div>
        <div className="md:w-1/3">
          <Cart_checkout />
        </div>
      </div>
    </div>
  );
}
