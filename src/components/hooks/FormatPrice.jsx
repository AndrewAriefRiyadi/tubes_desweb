/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import { useState } from "react";

const FormatPrice = (price) => {
    const exchangeRate = 15433.75;
  const userLanguage = navigator.language || navigator.userLanguage;
  const isUserInIndonesia = userLanguage.toLowerCase().startsWith("id");
  const currency = isUserInIndonesia ? "IDR" : "USD";
  const convertedPrice = currency === "IDR" ? price * exchangeRate : price;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency === "IDR" ? "IDR" : "USD",
  }).format(convertedPrice);
};

export default FormatPrice;
