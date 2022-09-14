import React, { useState }  from 'react'
import './Item.css'

const Item = ({ data }) => {
    const [items, setItems] = useState(0)
    const sumar = () => items <= data.stock - 1 ? setItems(items + 1) : alert` a llegado al limite del stock del producto`
    const restar = () => items > 0 ? setItems(items - 1) : alert`por favor introduce la cantidad del producto que quiera agregar al carrito, muchas gracias!`
    return (
        <>
            <div id={`phone${data.id}`} className="col-md-2 card card_size d-flex">
                <img src={`${data.img}`} className="card-img-top zoom" alt={data.alt}/>
                    <div className="d-flex justify-content-center card-body">
                        <h5 className="card-title text-center">{data.brand} {data.model}</h5>
                        <div className='counter_container d-flex justify-content-center align-items-center'>
                            <button className='btn counter_btn' onClick={restar}>-</button>
                            <p className='mt-3 mx-2'>{items}</p>
                            <button className='btn counter_btn' onClick={sumar}>+</button>
                        </div>
                        <h5 className="card-title text-center">Stock: {data.stock}</h5>
                        <h6 className="card-title text-center">${data.price}</h6>
                        <button className='btn'>Add to Cart</button>
                    </div>
            </div>

        </>
    )
}

export default Item