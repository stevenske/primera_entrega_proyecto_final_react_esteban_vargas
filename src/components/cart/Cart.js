import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import moment from 'moment'
import '../itemDetail/ItemDetail.css'
import './Cart.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc, getFirestore, updateDoc,doc } from 'firebase/firestore'

const Cart = () => {
    const navigate = useNavigate()
    const { cart, removeProduct, clear } = useContext(CartContext)
    const totalProducts = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    const db = getFirestore()
    const [order, setOrder] = useState(
        {
            buyer: {
                name: "",
                phone:0 ,
                mail: ''
            },
            items: cart,
            total: cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0),
            date: moment().format(),
        }
    ) 
    const createOrder = async () => {
        const query = collection(db, 'orders')
        await addDoc (query, order)
        .then(() => {
            updateStockProducts()
            alert('Congrats your purchase was completed')
        })
        .catch(() => {
            alert('your purchase could not be completed please try again later')
        })
    }
    const updateStockProducts = () =>{
        cart.forEach((product)=>{
        const queryUpdate = doc(db,'products',product.id)
        updateDoc(queryUpdate,{
            brand: product.brand,
            category: product.category,
            description: product.description,
            image: product.image,
            model: product.model,
            price: product.price,
            color: product.color,
            stock: product.stock - product.quantity,
        })
        .then(()=>{
            if(cart[cart.length - 1].id === product.id)
            clear()
            navigate('/')
        })
        .catch((error)=>{
            console.log(error);
        })
        })
    }
    const handleInputChange = (e) => {
        setOrder({
            ...order,
            buyer:{
                ...order.buyer,
                [e.target.name]: e.target.value,
            },
            
        })
    }
    return (
        <>
            <div className='row itemContainer gap-3 border border-dark rounded'>
                <h1 className='text-center border-bottom border-dark py-3 text-light bg-dark'>Cart</h1>
                {cart.length === 0 ? (
                    <>
                        <h2>the cart is empty :c</h2>
                        <p className='backToHome'><Link className='backToHome border border-dark rounded px-3' to="/">Back to home</Link></p>
                    </>

                ) : (
                    <>
                        {cart.map((product) => (
                            <div key={product.id}>
                                <div id={`${product.id}`} className="col-6 flex-row card w-50 card_size borderMix">
                                    <img src={`${product.image}`} className="zoom" alt={product.model} />
                                    <div className="d-flex justify-content-center card-body">
                                        <p className="card-title fs-3 fw-bold text-center">{product.model}</p>
                                        <p className="card-title fs-3 fw-bold text-center">{product.category}</p>
                                        <p className="card-title fs-3 fw-bold text-center">Quantity: {product.quantity}</p>
                                        <p className="card-title fs-3 fw-bold text-center rounded p-2 bg-dark text-light mx-auto ">Price: ${product.price * product.quantity}</p>
                                    </div>
                                    <button className='btnRemove fs-3 px-5 align-self-center btn border border-dark' onClick={() => removeProduct(product.id)}>X</button>
                                </div>
                            </div>

                        ))}
                        <div className="total d-flex fs-3 justify-content-between border-top py-3 border-dark text-center text-light bg-dark">

                            <button className='btn' onClick={clear}>CLEAR CART</button>
                            <p><strong>TOTAL: ${totalProducts}</strong></p>
                        </div>
                    </>
                )}
            </div>
            <div className='d-flex justify-content-center'><button  data-bs-toggle="modal" data-bs-target="#completeBuy" className='btn fs-3 p-5'>COMPLETE BUY</button></div>
            <div className="modal fade" id="completeBuy" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <label className="col-form-label">Name</label>
                                <input name='name' type="text" className="form-control" placeholder='name...' value={order.buyer.name} onChange={handleInputChange} />
                            </div>
                            <div>
                                <label className="col-form-label">Phone</label>
                                <input name='phone' type="number" className="form-control" placeholder='Phone...' value={order.buyer.phone} onChange={handleInputChange}/>
                            </div>
                            <div>
                                <label className="col-form-label">Mail</label>
                                <input name='mail' type="text" className="form-control" placeholder='Mail...' value={order.buyer.mail} onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={createOrder} data-bs-dismiss="modal" className='btn fs-3 p-3'>Confirm Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Cart