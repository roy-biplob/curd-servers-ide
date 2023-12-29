import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './User';
import Update from './Update';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path:"/user",
    element:<User></User>,
    loader : ()=>fetch('https://crud-operation-server-side-cyxjhdfo3-biplob-kumar-roys-projects.vercel.app/user')
    

  }
  , {
    path:"/update/:id",
    element:<Update></Update>,
    loader:()=> fetch('https://crud-operation-server-side-cyxjhdfo3-biplob-kumar-roys-projects.vercel.app/user')

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
