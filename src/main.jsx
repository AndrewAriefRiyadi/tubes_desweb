import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home.jsx'
import Tops from './pages/tops.jsx'
import Product from './pages/product.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/tops",
    element: <Tops/>
  },
  {
    path: "/product",
    element: <Product/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
