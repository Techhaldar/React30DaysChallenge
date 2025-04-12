import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <li>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About Us</NavLink>
          <NavLink to={"/contact"}>Contact Us</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </nav>
    </div>
  )
}

export default Navbar