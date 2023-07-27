import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './cart.css'
import { remove } from '../Redux/cartSlice'

function Cart() {
  const cardItem = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  const handleRemove = (id)=>{
    dispatch(remove(id))
  }
  return (
    <div className='cardWrapper'>
      {
        cardItem.map((item)=>(
          <div className='cardItem'>
            <img src={item.image} alt='img'/>
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className='btn-1' onClick={()=>handleRemove(item.id)}>remove</button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart
