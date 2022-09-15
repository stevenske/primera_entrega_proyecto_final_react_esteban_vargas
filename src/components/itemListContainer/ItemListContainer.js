
import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [list, setList] = useState([])
  const {categoryName} = useParams()


  const getProducts = async () =>{
    let url
    if(categoryName){
      url = `https://fakestoreapi.com/products/category/${categoryName}`
    }else{
      url = 'https://fakestoreapi.com/products'
    }
      fetch(url,{
          method: 'GET'
      })
      .then((response)=>response.json())
      .then((data)=> setList(data))
      .finally(console.log(list))
  }

  useEffect(()=>{
    getProducts()
  },[categoryName])
  return (<>
    <div id='ItemList-container' className='row itemContainer gap-3'>
      <ItemList products={list}/>
    </div>
    </>
)}

export default ItemListContainer