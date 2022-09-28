import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import '../itemDetail/ItemDetail.css'
import './Cart.css'
import {Link} from 'react-router-dom'

const Cart = () => {
    const { cart, addToCart,removeProduct } = useContext(CartContext)
    const totalProducts = cart.reduce((acc,prod)=>acc + prod.price * prod.quantity,0)
    return (
        <div className='row itemContainer gap-3 border border-dark rounded'>
            <h1 className='text-center border-bottom border-dark py-3'>Cart</h1>
            {cart.length === 0 ?(
                <>
                <h2>the cart is empty :c</h2>
                <p className='backToHome'><Link  className='backToHome border border-dark rounded px-3' to="/">Back to home</Link></p>
                </>
            
            ):(
                <>
                {cart.map((product) => (
                <div id={`${product.id}`} className="col-6 flex-row card w-50 card_size">
                <img src={`${product.image}`} className="zoom" alt={product.title}/>
                    <div className="d-flex justify-content-center card-body">
                        <p className="card-title fs-3 fw-bold text-center">{product.title}</p>
                        <p className="card-title fs-3 fw-bold text-center">Quantity: {product.quantity}</p>
                        <p className="card-title fs-3 fw-bold text-center">Price: {product.price * product.quantity}</p>
                    </div>
                        <button className='btnRemove fs-3 px-5 py-1 align-self-center btn' onClick={() => removeProduct(product.id)}>X</button>
            </div>
            ))}
            <h6 className="d-flex justify-content-end fs-3 border-top py-3 border-dark text-center"><strong>TOTAL: ${totalProducts}</strong></h6>
            </>
            )}
        </div>
        )
}


export default Cart