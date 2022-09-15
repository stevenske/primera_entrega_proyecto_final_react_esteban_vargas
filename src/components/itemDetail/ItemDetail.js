import React, { useState } from 'react'
import './ItemDetail.css'
const ItemDetail = ({ product }) => {
    const [items, setItems] = useState(0)
    const sumar = () => items <= product.rating.count - 1 ? setItems(items + 1) : alert` no pueden ser mas de 4 gustos en tu kilo de helado`
    const restar = () => items > 0 ? setItems(items - 1) : alert`por favor introduce la cantidad de gustos en tu kilo de helado, muchas gracias!`
    return (
        <>
            <div id={`phone${product.id}`} className="col-6 card card_size d-flex">
                <img src={`${product.image}`} className="card-img-top zoom" alt={product.title}/>
                    <div className="d-flex justify-content-center card-body">
                        <h5 className="card-title text-center">{product.title}</h5>
                        <h5 className="card-title text-center">Stock: {product.rating.count}</h5>
                        <div className='d-flex justify-content-center'>
                            <button className='btn' onClick={restar}>-</button>
                            <p className='my-auto mx-2'>{items}</p>
                            <button className='btn' onClick={sumar}>+</button>
                        </div>
                        <h6 className="card-title text-center">${product.price}</h6>
                        <button className='btn'>Add to Cart</button>
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