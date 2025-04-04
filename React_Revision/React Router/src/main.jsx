import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App.jsx';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Element: <Layout />,
    Children: [
      {
        path: "",
        Element: <Home />
      }, {
        path: "about",
        element: <About />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)