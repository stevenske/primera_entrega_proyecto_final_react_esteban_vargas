import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product,setProduct]= useState()

    const getProduct = async () => {
        await fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((producto) =>{
            // console.log(producto)
            setProduct(producto)
        })
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div id='ItemDetail-container' className='row itemContainer gap-3'>     
            {product && <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer