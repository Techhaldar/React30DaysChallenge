import './App.css'
import Navbar from './component/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Login from './component/Login'
import Footer from './component/Footer'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
    },
    {
      path: "/About",
      element:
        <>
          <Navbar />
          <About />
          <Footer />
        </>
    },
    {
      path: "/Login",
      element:
        <>
          <Navbar />
          <Login />
          <Footer />
        </>
    },
    {
      path: "/Contact",
      element:
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
