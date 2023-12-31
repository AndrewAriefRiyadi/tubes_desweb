import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home.jsx'
import Product from './pages/product.jsx'
import Cart from './pages/cart.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css";
import CheckoutPage from './pages/checkout.jsx'
import CatalogPage from './pages/catalog.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/product/:id",
    element: <Product/>,
  },  
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/checkout",
    element: <CheckoutPage/>
  },
  {
    path: "/catalog",
    element: <CatalogPage/>,
  },
  {
    path: "/catalog/:category",
    element: <CatalogPage/>,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
