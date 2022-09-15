import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ product }) => {
    const [items, setItems] = useState(0)
    const onRemove = () => items <= product.rating.count - 1 ? setItems(items + 1) : alert` no pueden ser mas de 4 gustos en tu kilo de helado`
    const onAdd = () => items > 0 ? setItems(items - 1) : alert`por favor introduce la cantidad de gustos en tu kilo de helado, muchas gracias!`
    return (
        <>
        <div className='d-flex justify-content-center'>
                        <button className='btn' onClick={onAdd}>-</button>
                        <p className='my-auto mx-2'>{items}</p>
                        <button className='btn' onClick={onRemove}>+</button>
                    </div>
    </>
    )
}
export default ItemCount