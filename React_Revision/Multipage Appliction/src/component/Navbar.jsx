import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <li>
          <NavLink to={"/"} className={(e) => { return e.isActive?"red": '' }}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/About"} className={(e) => { return e.isActive?"red": '' }}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/Contact"} className={(e) => { return e.isActive?"red": '' }}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/Login"} className={(e) => { return e.isActive?"red": '' }}>Login</NavLink>
        </li>

      </nav>
    </>
  )
}

export default Navbar