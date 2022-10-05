import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'
import {getFirestore,doc,getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product,setProduct]= useState({})
    const db = getFirestore()
    const queryDoc = doc(db,'products',id)
    getDoc(queryDoc).then(res=>{
        
    })
    const getProduct = async () => {
        const db = getFirestore()
        const queryDoc = doc(db,'products',id)
        getDoc(queryDoc).then(res=>{
            const product = {...res.data(), id: res.id}
            setProduct(product)
        })
    }
    useEffect(() => {
        getProduct()
    }, [id])
    return (
        <div id='ItemDetail-container' className='row itemContainer gap-3'>     
            {product && <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer