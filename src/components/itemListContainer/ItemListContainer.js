
import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../itemList/ItemList'

const ItemListContainer = () => {
  const [list, setList] = useState([])
  const getProducts = async () =>{
      fetch('https://fakestoreapi.com/products/',{
          method: 'GET'
      })
      .then((response)=>response.json())
      .then((data)=> setList(data))
      .finally(console.log(list))
  }

  useEffect(()=>{
    getProducts()
  },[])
  return (<>
    <div id='ItemList-container' className='row itemContainer gap-3'>
      <ItemList products={list}/>
    </div>
    </>
)}

export default ItemListContainer