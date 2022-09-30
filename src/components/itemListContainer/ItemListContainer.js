import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore,query,where } from 'firebase/firestore'

const ItemListContainer = () => {
  const [list, setList] = useState([])
  const {categoryName} = useParams()


  const getProducts = () =>{
    const db = getFirestore()
    const querySnapshot = collection(db,'products')
    if(categoryName){
      const queryFilter = query(querySnapshot, where('category','==', categoryName))
      getDocs(queryFilter).then((res)=>{
        const data = res.docs.map((doc)=>{
          return {id: doc.id, ...doc.data()}
        })
        setList(data)
      })
    }else{
      getDocs(querySnapshot).then((res)=>{
        const data = res.docs.map((doc)=>{
          return {id: doc.id, ...doc.data()}
        })
        setList(data)
      })
    }
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