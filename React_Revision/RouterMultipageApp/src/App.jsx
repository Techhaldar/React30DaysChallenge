import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
Navbar
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar />
        <Home />
        <Footer />
      </>
    },
    {
      path: "/about",
      element: <>
        <Navbar />
        <About />
        <Footer />
      </>
    },
    {
      path: "/contact",
      element: <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    },
    {
      path: "/login",
      element: <>
        <Navbar />
        <Login />
        <Footer />
      </>
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App