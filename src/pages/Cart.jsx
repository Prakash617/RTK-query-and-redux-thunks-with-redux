import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  { remove } from '../app/slices/cartSlice'
const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

  return (
    <div>
        <h3>Cart</h3>
            <div className="  mx-auto  d-flex w-50 flex-column">
                {products.map((product) => (
                    <div key={product.id} className="card p-4 my-2 d-flex flex-row">
                        <div>

                        <img src={product.image} className='img-fluid w-25' alt="" />
                        </div>
                        <div className='d-flex flex-column'>
                        
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                            className="btn btn-danger my-auto"
                            onClick={() => handleRemove(product.id)}
                            >
                            Remove
                        </button>
                            </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Cart