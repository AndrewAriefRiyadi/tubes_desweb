// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Cart_checkout from "./cart_checkout";
import InputComponent from "./inputan";
import { useLanguage } from "./hooks/LanguageContext";

export default function Checkout() {
  const [inputValue, setInputValue] = useState("");
  const { language } = useLanguage();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col mt-16 gap-1 md:mx-10 lg:mx-16 mx-5 mb-16">
      <p>{language === "en" ? "Dashboard / Cart" : "Dasbor / Keranjang"}</p>
      <p className="font-bold text-xl">
        {language === "en" ? "Cart" : "Keranjang"}
      </p>
      <div className="flex max-md:flex-col gap-4">
        <div className="md:w-2/3 md:flex md:flex-col">
          <div className="md:w-2/3 md:flex gap-6">
            <div className="flex flex-col gap-5">
              <InputComponent
                label={language === "en" ? "Address" : "Alamat"}
                type="text"
                placeholder={language === "en" ? "Username" : "Username"}
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-5">
              <InputComponent
                label={language === "en" ? "Additional" : "Tambahan"}
                type="text"
                placeholder={language === "en" ? "Additional" : "Tambahan"}
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="md:w-2/3 md:flex gap-6">
            <div className="flex flex-col gap-5">
              <InputComponent
                label={language === "en" ? "Email" : "E-mail"}
                type="text"
                placeholder={language === "en" ? "E-mail" : "E-mail"}
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-5">
              <InputComponent
                label={language === "en" ? "Phone" : "Telepon"}
                type="text"
                placeholder={
                  language === "en" ? "Phone Number" : "Nomor Telepon"
                }
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/3">
          <Cart_checkout />
        </div>
      </div>
    </div>
  );
}
