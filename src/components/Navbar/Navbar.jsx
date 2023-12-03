/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import ListNavbar from "./ListNavbar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openList, setOpenList] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleList = () => {
    setOpenList(!openList);
  };
  return (
    <>
        <head>
          <link
            rel="stylesheet"
            href="https://cdn-uicons.flaticon.com/2.0.0/uicons-solid-rounded/css/uicons-solid-rounded.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn-uicons.flaticon.com/2.0.0/uicons-bold-rounded/css/uicons-bold-rounded.css"
          ></link>
        </head>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
                Desweb Logo
              </span>
            </a>
            <div className="flex gap-6 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="flex text-xl text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 md:me-0"
                id="search-button"
                aria-expanded="false"
              >
                <i className="fi fi-br-search"></i>
              </button>
              <button
                type="button"
                className="flex text-xl text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 md:me-0"
                id="cart-button"
                aria-expanded="false"
              >
                <i className="fi fi-sr-shopping-cart"></i>
              </button>
              <button
                type="button"
                className="flex text-xl text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 md:me-0"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open user menu</span>
                <i className="fi fi-sr-user"></i>
              </button>

              <div
                className={`z-50 ${
                  open ? "block" : "hidden"
                }  absolute top-12 right-10 border border-gray-300 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user"
                aria-expanded="false"
                onClick={toggleList}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`items-center justify-between ${
                openList ? "hidden" : ""
              } w-full md:flex md:w-auto md:order-1`}
              id="navbar-user"
            >
              <ListNavbar />
            </div>
          </div>
        </nav>
    </>
  );
};

export default Navbar;
