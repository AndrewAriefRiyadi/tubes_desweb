// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return(
        
        <div className="md:w-2/12 items-center max-md:self-center gap-2 bg-white flex md:flex-col pt-4 md:p-4">
            <Link to="/catalog/tops">
                <h1 className="font-bold md:text-2xl">Tops</h1>
            </Link>
            <Link to="/catalog/bottoms">
                <h1 className="font-bold md:text-2xl">Bottoms</h1>
            </Link>
            <Link to="/catalog/shoes">
                <h1 className="font-bold md:text-2xl">Shoes</h1>
            </Link>
            <Link to="/catalog/acc">
                <h1 className="font-bold md:text-2xl">Accessories</h1>
            </Link>
        </div>
    );
}