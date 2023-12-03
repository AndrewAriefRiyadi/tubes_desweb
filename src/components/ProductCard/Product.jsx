/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import FormatPrice from "../hooks/FormatPrice";

export default function Example() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://fakestoreapi.com/products/category/men's clothing"
          );
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      };
      fetchData();
    }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 w-full sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="min-h-max w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between items-end">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {FormatPrice(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
