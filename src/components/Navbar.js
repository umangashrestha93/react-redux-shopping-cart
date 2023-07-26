import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='nav-container'>
        <ul>
            <Link to={"/"}>
            <li>Home</li>
            </Link>
            <Link to={"/cart"}>
            <li>Cart</li>
            </Link>
            <span>item: 0</span>
        </ul>
    </div>
    </>
  )
}

export default Navbar
