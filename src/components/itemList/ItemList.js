import React from 'react'
import Item from '../item/Item'
const ItemList = ({products}) => {
  return (
    <>
    {
        products.map((ice)=><Item key={ice.id } data={ice}/>)
    }
    </>
  )
}

export default ItemList