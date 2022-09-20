import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../itemCount/ItemCount'
import './ItemDetail.css'
const ItemDetail = ({ product }) => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        console.log(count);
    }
    return (
        <>
            <div id={`phone${product.id}`} className="col-6 card card_size d-flex">
                <img src={`${product.image}`} className="card-img-top zoom" alt={product.title}/>
                    <div className="d-flex justify-content-center card-body">
                        <h5 className="card-title text-center">{product.title}</h5>
                        <h5 className="card-title text-center">Stock: {product.rating.count}</h5>
                        <ItemCount product={product} setCount ={setCount} count={count}/>
                        <h6 className="card-title text-center">${product.price}</h6>
                        <Link to='/cart' onClick={handleClick} className='btn'>Add to Cart</Link>
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