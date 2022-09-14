import React from 'react'
import ItemDetail from '../itemDetail/ItemDetail'

const ItemListDetail = ({products}) => {
    return (
        <>
        {
            products.map((phones)=><ItemDetail key={phones.id } data={phones}/>)
        }
        </>
    )
}

export default ItemListDetail
