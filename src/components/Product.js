import React, { useEffect, useState } from 'react'

const Product = () => {

    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(data => data.json())
        .then(result => setProducts(result) )
    }, [])
  return (
    <div>
        <h1>Product</h1>
    </div>
  )
}

export default Product
