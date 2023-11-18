/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const CardProduct = (props) =>{
    return (
      <>
        <div className="relative m-5 flex w-2/12 max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <a
            className="relative mx-3 mt-3 flex h-52 overflow-hidden rounded-xl"
            href="#"
          >
            <img
              className="object-cover"
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="product image"
            />
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900">
                {props.title}
              </h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-2xl font-bold text-amber-600">
                  {props.harga}
                </span>
              </p>
            </div>
            <a
              href="#"
              className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Add to cart
            </a>
          </div>
        </div>

      </>
    );
}

export default CardProduct;