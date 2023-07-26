import React from 'react'
import Product from './components/Product'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='cart' element={<Cart />}/>
    </Routes>
    </>
  )
}

export default App
