import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css";
import Coba from './pages/coba.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/coba",
    element: <Coba/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
