import React from 'react'
import { Link } from 'react-router-dom'
import Item from '../item/Item'
import './ItemList.css'

const ItemList = ({ products }) => {
  return (
    <>
      {
        products.map((product) =>
          <Link className='card_container col-md-2 d-flex' key={product.id} to={'/detail/' + product.id}  >
            <Item  data={product} />
          </Link>
        )}
    </>
  )
}

export default ItemList