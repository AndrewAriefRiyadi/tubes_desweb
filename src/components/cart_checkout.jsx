// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./hooks/LanguageContext";
import FormatPrice from "./hooks/FormatPrice";

export default function Cart_checkout() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col gap-4 mb-4">
      <h1 className="font-bold text-xl">
        {language === "en" ? "Voucher" : "Kode Diskon"}
      </h1>
      <h1 className="font-bold text-xl w-12 rounded-lg self-end text-right">
        L
      </h1>
      <h1 className="font-bold text-xl">
        {language === "en" ? "Order Summary" : "Ringkasan Belanja"}
      </h1>
      <div className="flex justify-between">
        <p>
          {language === "en"
            ? "Total Price (2 Products)"
            : "Total Harga (2 Produk)"}
        </p>
        <p className="font-bold">{FormatPrice(38.62)}</p>
      </div>
      <div className="flex justify-between">
        <p>{language === "en" ? "Shipping Cost" : "Ongkos Kirim"}</p>
        <p className="font-bold">{FormatPrice(1.94)}</p>
      </div>
      <div className="flex justify-between">
        <p>{language === "en" ? "Discount" : "Diskon"}</p>
        <p className="font-bold">{FormatPrice(0)}</p>
      </div>
      <div className="h-1 w-auto bg-gray-950"></div>
      <div className="flex justify-between">
        <p className="font-bold">
          {language === "en" ? "Total Price" : "Total Harga"}
        </p>
        <p className="font-bold">{FormatPrice(40.56)}</p>
      </div>
      <Link to={"/checkout"}>
        <div className="flex rounded-full h-10 border border-black bg-black text-white justify-center items-center gap-4">
          <img
            className="w-fit"
            src=".\src\assets\cart.png"
            alt="Cart Icon"
          ></img>
          <p>{language === "en" ? "Checkout" : "Pembayaran"}</p>
        </div>
      </Link>
    </div>
  );
}
