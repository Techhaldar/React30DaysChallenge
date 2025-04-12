import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
      <nav>
        <li><NavLink to={"/"} className={(e) => { return e.isActive ? "red" : "" }}>Home</NavLink></li>
        <li><NavLink to={"/about"} className={(e) => { return e.isActive ? "red" : "" }}>About</NavLink></li>
        <li><NavLink to={"/contact"} className={(e) => { return e.isActive ? "red" : "" }}>Contact</NavLink></li>
        <li><NavLink to={"/login"} className={(e) => { return e.isActive ? "red" : "" }}>Login</NavLink></li>
      </nav>
    </div>
  )
}

export default Navbar 