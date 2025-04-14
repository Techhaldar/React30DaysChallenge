import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <nav className='flex list-none gap-16 bg-orange-500 p-4'>
        <li>
          <NavLink to={"/"} className={(e) => { e.isActive ? "red" : "" }}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={(e) => { e.isActive ? "red" : "" }}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className={(e) => { e.isActive ? "red" : "" }}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/login"} className={(e) => { e.isActive ? "red" : "" }}>Login</NavLink>
        </li>
      </nav>
    </>

  )
}

export default Navbar