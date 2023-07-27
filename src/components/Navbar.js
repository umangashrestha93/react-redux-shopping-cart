import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items = useSelector((state)=> state.cart)
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
            <span>item: {items.length}</span>
        </ul>
    </div>
    </>
  )
}

export default Navbar
