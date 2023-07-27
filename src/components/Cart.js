import React from 'react'
import { useSelector } from 'react-redux'
import './cart.css'

function Cart() {
  const cardItem = useSelector((state)=>state.cart)
  return (
    <div className='cardWrapper'>
      {
        cardItem.map((item)=>(
          <div className='cardItem'>
            <img src={item.image} alt='img'/>
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className='btn-1'>remove</button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart
