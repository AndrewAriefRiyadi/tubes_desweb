// eslint-disable-next-line no-unused-vars
import React from "react";

export default function review() {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="md:mr-8">
        <h1 className="text-1xl font-black mt-5 mb-7">PENILAIAN</h1>
        <h2 className="flex rounded-full h-10 w-[225px] border border-black bg-black text-white justify-center items-center gap-4 mb-5">
          Nilai Produk
        </h2>
        <div className="review">
          <div className="flex items-center">
            <p className="text-black font-extrabold mr-3">Putri</p>
            <p className="text-gray-400 text-xs text-opacity-50">Rabu, 13:54</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="star-rating inline-block ml-0">
              <input
                type="radio"
                id="5-stars"
                name="rating"
                value="5"
                className="hidden"
              />
              <label
                htmlFor="5-stars"
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                ★
              </label>
              <input
                type="radio"
                id="4-stars"
                name="rating"
                value="4"
                className="hidden"
              />
              <label
                htmlFor="4-stars"
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                ★
              </label>
              <input
                type="radio"
                id="3-stars"
                name="rating"
                value="3"
                className="hidden"
              />
              <label
                htmlFor="3-stars"
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                ★
              </label>
              <input
                type="radio"
                id="2-stars"
                name="rating"
                value="2"
                className="hidden"
              />
              <label
                htmlFor="2-stars"
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                ★
              </label>
              <input
                type="radio"
                id="1-star"
                name="rating"
                value="1"
                className="hidden"
              />
              <label
                htmlFor="1-star"
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                ★
              </label>
            </div>
            <p className="text-sm text-gray-600">Warna: Putih Size: M</p>
          </div>
          <p className="text-sm text-gray-600 mt-3 mb-2">
            Produk nya sangat mantap.
          </p>
          <div className="flex items-center mt-1">
            <img
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" // Replace with the actual path to your image
              alt="Small Image"
              className="flex rounded-lg w-[150px] h-[200px] "
            />
          </div>
        </div>
        <div className="review">
          <div className="flex items-center">
            <p className="text-black font-extrabold mr-3 mt-10">Mita</p>
            <p className="text-gray-400 text-xs text-opacity-50 mt-10">
              Kamis, 15:14
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="star-rating inline-block ml-0">
              <input
                type="radio"
                id="5-stars"
                name="rating"
                value="5"
                className="hidden"
              />
              <label
                htmlFor="5-stars"
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                ★
              </label>
              <input
                type="radio"
                id="4-stars"
                name="rating"
                value="4"
                className="hidden"
              />
              <label
                htmlFor="4-stars"
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                ★
              </label>
              <input
                type="radio"
                id="3-stars"
                name="rating"
                value="3"
                className="hidden"
              />
              <label
                htmlFor="3-stars"
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                ★
              </label>
              <input
                type="radio"
                id="2-stars"
                name="rating"
                value="2"
                className="hidden"
              />
              <label
                htmlFor="2-stars"
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                ★
              </label>
              <input
                type="radio"
                id="1-star"
                name="rating"
                value="1"
                className="hidden"
              />
              <label
                htmlFor="1-star"
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                ★
              </label>
            </div>
            <p className="text-sm text-gray-600">Warna: Putih Size: M</p>
          </div>
          <p className="text-sm text-gray-600 mt-3 mb-2">
            Kualitas Produk nya mantap sekali.
          </p>
          <div className="flex items-center mt-1">
            <img
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" // Replace with the actual path to your image
              alt="Small Image"
              className="flex rounded-lg w-[150px] h-[200px] "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:w-1/3 md:h-1/3 bg-gray-100 rounded-lg p-4 mt-4 md:mt-[4.5rem]">
        <div className="mb-4">
          <div className="text-5xl font-extrabold px-4 py-2 rounded-full">5.0</div>
          <div className="ml-4">dari 2 penilaian</div>
          <div className="flex items-center gap-2 ml-4">
            <div className="star-rating inline-block ml-0">
              <input
                type="radio"
                id="5-stars"
                name="rating"
                value="5"
                className="hidden"
              />
              <label
                htmlFor="5-stars"
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                ★
              </label>
              <input
                type="radio"
                id="4-stars"
                name="rating"
                value="4"
                className="hidden"
              />
              <label
                htmlFor="4-stars"
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                ★
              </label>
              <input
                type="radio"
                id="3-stars"
                name="rating"
                value="3"
                className="hidden"
              />
              <label
                htmlFor="3-stars"
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                ★
              </label>
              <input
                type="radio"
                id="2-stars"
                name="rating"
                value="2"
                className="hidden"
              />
              <label
                htmlFor="2-stars"
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                ★
              </label>
              <input
                type="radio"
                id="1-star"
                name="rating"
                value="1"
                className="hidden"
              />
              <label
                htmlFor="1-star"
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                ★
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <div className="flex items-center gap-4">
            <p className="text-black font-extrabold">5</p>
            <div className="h-2 w-[20rem] bg-gray-600 rounded-full">
              <div className="h-2 w-[20rem] bg-black rounded-full"></div>
            </div>
            <p className="text-black font-extrabold">100%</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-black font-extrabold">4</p>
            <div className="h-2 w-[20rem] bg-gray-200 rounded-full">
              <div className="h-2 w-[0rem] bg-black rounded-full"></div>
            </div>
            <p className="text-black font-extrabold">0%</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-black font-extrabold">3</p>
            <div className="h-2 w-[20rem] bg-gray-200 rounded-full">
              <div className="h-2 w-[0rem] bg-black rounded-full"></div>
            </div>
            <p className="text-black font-extrabold">0%</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-black font-extrabold">2</p>
            <div className="h-2 w-[20rem] bg-gray-200 rounded-full">
              <div className="h-2 w-[0rem] bg-black rounded-full"></div>
            </div>
            <p className="text-black font-extrabold">0%</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-black font-extrabold mr-1">1</p>
            <div className="h-2 w-[20rem] bg-gray-200 rounded-full">
              <div className="h-2 w-[0rem] bg-black rounded-full"></div>
            </div>
            <p className="text-black font-extrabold">0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
