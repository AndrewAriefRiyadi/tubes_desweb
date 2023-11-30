// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return( 
        <div className="w-2/12 bg-white text-black p-4 flex flex-col">
            <Link to="#">
                <h1 className="font-bold text-2xl">KATEGORI</h1>
            </Link>
            <Link to="#">
                <h1 className="font-bold text-2xl">KATEGORI</h1>
            </Link>
            <Link to="#">
                <h1 className="font-bold text-2xl">KATEGORI</h1>
            </Link>
            <Link to="#">
                <h1 className="font-bold text-2xl">KATEGORI</h1>
            </Link>
            <Link to="#">
                <h1 className="font-bold text-2xl">KATEGORI</h1>
            </Link>
            <Link to="#">
                <h1 className="font-bold text-2xl">KATEGORI</h1>
            </Link>
            <Link to="#">
                <h1 className="font-bold text-2xl">KATEGORI</h1>
            </Link>
        </div>
    );
}