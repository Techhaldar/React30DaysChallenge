import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Login from './component/Login'
import Footer from './component/Footer'
import User from './component/User'

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
      path:"/user/:username",
      element: <><Navbar /><User /></>
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
      path: "/Contact",
      element:
        <>
          <Navbar />
          <Contact />
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

  ])

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
