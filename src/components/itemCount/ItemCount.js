
const ItemCount = ({ product, setCount,count }) => {

    const onRemove = () => count <= product.stock - 1 ? setCount(count + 1) : alert` You have reach the limit of the stock`
    const onAdd = () => count > 0 ? setCount(count - 1) : alert`please choose the quantity you want to buy of this product, thank you very much!`
    return (
        <>
        <div className='d-flex justify-content-center'>
                        <button className='btn' onClick={onAdd}>-</button>
                        <p className='my-auto mx-2'>{count}</p>
                        <button className='btn' onClick={onRemove}>+</button>
                    </div>
    </>
    )
}
export default ItemCount