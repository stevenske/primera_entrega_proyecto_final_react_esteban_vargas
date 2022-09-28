import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import '../itemDetail/ItemDetail.css'
import './Cart.css'
import {Link} from 'react-router-dom'

const Cart = () => {
    const { cart, addToCart,removeProduct } = useContext(CartContext)
    const total = cart.reduce((acc,prod)=>acc + prod.price * prod.quantity,0)
    return (
        <div className='row itemContainer gap-3'>
            <h1>Cart</h1>
            {cart.length === 0 ?(
                <>
                <h2>the cart is empty :c</h2>
                <p className='backToHome'><Link  className='backToHome border border-dark rounded px-3' to="/">Back to home</Link></p>
                </>
            
            ):(
                <>
                {cart.map((product) => (
                <div id={`${product.id}`} className="col-6 card card_size d-flex">
                <img src={`${product.image}`} className="card-img-top zoom" alt={product.title}/>
                    <div className="d-flex justify-content-center card-body">
                        <h5 className="card-title text-center">{product.title}</h5>
                        <h5 className="card-title text-center">Quantity: {product.quantity}</h5>
                        <h6 className="card-title text-center">${total}</h6>
                        <button className='btn' onClick={() => removeProduct(product.id)}>remove</button>
                    </div>
            </div>
            ))}
            </>
            )}
        </div>
        )
}


export default Cart