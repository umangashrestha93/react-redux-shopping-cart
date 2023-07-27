import React, { useEffect} from 'react';
import './home.css'; 
import { add } from '../Redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchProduct } from '../Redux/ProductSlice';

const Home = () => {
  // const [products, setProducts] = useState([]);

  const {data: products, status} = useSelector((state)=> state.product)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const res = await fetch('https://fakestoreapi.com/products');
  //     const data = await res.json();
  //     setProducts(data);
  //   };
  //   fetchProduct();
  // }, []);
  useEffect(()=>{
    dispatch(fetchProduct())
  },[])

  const handleAdd=(product)=>{
    dispatch(add(product))
  }
  if (status === STATUSES.Loading){
    return <h2 style={{fontSize: 'bolder', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
      Loading...
    </h2>
  }

  return (
    <div className="grid-container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="img" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={()=>handleAdd(product)}>add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
