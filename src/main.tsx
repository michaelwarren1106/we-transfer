import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/rooms" />,
  },
  {
    path: "/rooms",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
