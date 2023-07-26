import React, { useEffect, useState } from 'react';
import './home.css'; 

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <div className="grid-container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="img" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn">add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
