import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../app/slices/cartSlice'
import { fetchProducts } from '../app/slices/productSlice';
import { STATUSES } from '../app/slices/productSlice';
const Products = () => {

  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
};

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
}

if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }



  return (
    <>
      <div>Products</div>
      <div className=" row row-cols-5 text-center gap-4 text-wrap">
        {products.map((product) => (
          <div className="card p-2 mx-auto" key={product.id}>
            <img src={product.image} className='mx-auto' width={50} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className="btn btn-success">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products