import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../itemCount/ItemCount'
import './ItemDetail.css'

import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ product }) => {
    const {addToCart} = useContext(CartContext)
    const[value,setValue] =useState(true)
    const [count, setCount] = useState(1)
    const onAdd = (product) => {
        setValue(!value)
        console.log(value);
        addToCart(product, count)
    }
    return (
        <>
            <div id={`${product.id}`} className="col-6 card card_size d-flex">
                <img src={`${product.image}`} className="card-img-top zoom" alt={product.title}/>
                    <div className="d-flex justify-content-center card-body">
                        <h5 className="card-title text-center">{product.title}</h5>
                        <h5 className="card-title text-center">Stock: {product.rating.count}</h5>
                        <ItemCount product={product} setCount ={setCount} count={count}/>
                        <h6 className="card-title text-center">${product.price}</h6>
                        { value == true ? <Link  onClick={() => onAdd(product)} className='btn'>Add to Cart</Link>: <button className='btn' to={'/'}>Finish Shopping</button>/*<Link className='btn' to={'/'}>Go to Home</Link>} */}
                    </div>
            </div>
            <ul className='desc col-6'>
                <h3>Description:</h3>
                <li>{product.description}</li>
            </ul>
        </>
    )
}

export default ItemDetail