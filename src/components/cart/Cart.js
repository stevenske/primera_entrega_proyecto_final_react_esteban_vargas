import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import moment from 'moment'
import '../itemDetail/ItemDetail.css'
import './Cart.css'
import {Link} from 'react-router-dom'
import {collection,addDoc,getFirestore} from 'firebase/firestore'

const Cart = () => {
    const { cart,removeProduct } = useContext(CartContext)
    const totalProducts = cart.reduce((acc,prod)=>acc + prod.price * prod.quantity,0)
    const createOrder = () => {
        const db = getFirestore()
        const order ={
            buyer:{
                name: "Steve",
                phone:'2343443242423',
                mail:'test@test.gmail'
            },
            items:cart,
            total: cart.reduce((acc, prod) =>acc + prod.price * prod.quantity,0),
            date: moment().format(),
        }
        const query = collection(db, 'orders')
        
    }
    return (
        <div className='row itemContainer gap-3 border border-dark rounded'>
            <h1 className='text-center border-bottom border-dark py-3 text-light bg-dark'>Cart</h1>
            {cart.length === 0 ?(
                <>
                <h2>the cart is empty :c</h2>
                <p className='backToHome'><Link  className='backToHome border border-dark rounded px-3' to="/">Back to home</Link></p>
                </>
            
            ):(
                <>
                {cart.map((product) => (
                    <div key={product.id}>
                        <div  id={`${product.id}`} className="col-6 flex-row card w-50 card_size borderMix">
                            <img src={`${product.image}`} className="zoom" alt={product.title}/>
                            <div className="d-flex justify-content-center card-body">
                                <p className="card-title fs-3 fw-bold text-center">{product.title}</p>
                                <p className="card-title fs-3 fw-bold text-center">Quantity: {product.quantity}</p>
                                <p className="card-title fs-3 fw-bold text-center rounded p-2 bg-dark text-light mx-auto ">Price: ${product.price * product.quantity}</p>
                            </div>
                            <button className='btnRemove fs-3 px-5 align-self-center btn border border-dark' onClick={() => removeProduct(product.id)}>X</button>
                        </div>
                    </div>
                
            ))}
            <p className="total d-flex justify-content-end fs-3 border-top py-3 border-dark text-center text-light bg-dark"><strong>TOTAL: ${totalProducts}</strong></p>
            </>
            )}
        </div>
        )
}


export default Cart