import React, { useState } from 'react'

const ItemCount = ({ product }) => {
    const [items, setItems] = useState(0)
    const onRemove = () => items <= product.rating.count - 1 ? setItems(items + 1) : alert` You have reach the limit of the stock`
    const onAdd = () => items > 0 ? setItems(items - 1) : alert`please choose the quantity you want to buy of this product, thank you very much!`
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