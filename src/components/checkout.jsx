// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Cart_checkout from "./cart_checkout";
import InputComponent from "./inputan";

export default function Checkout() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    return( 
        <div className="flex flex-col  mt-16 gap-1 md:mx-10 lg:mx-16 mx-5 mb-16  ">
            <p>Dashboard / Cart</p>
            <p className=" font-bold text-xl">Cart</p>
            <div className="flex max-md:flex-col gap-4">
                <div className="md:w-2/3 md:flex md:flex-col">
                    <div className="md:w-2/3 md:flex gap-6">
                        <div className="flex flex-col  gap-5">
                            <InputComponent
                                label="Alamat"
                                type="text"
                                placeholder="username"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex flex-col  gap-5">
                            <InputComponent
                                label="Tambahan"
                                type="text"
                                placeholder="Tambahan"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3 md:flex gap-6">
                        <div className="flex flex-col  gap-5">
                            <InputComponent
                                label="E-mail"
                                type="text"
                                placeholder="E-mail"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex flex-col  gap-5">
                            <InputComponent
                                label="Telepon"
                                type="text"
                                placeholder="Phone Number"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3">
                    <Cart_checkout/>
                </div>
            </div> 
        </div>
    );
}