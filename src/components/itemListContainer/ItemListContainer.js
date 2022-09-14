
import './ItemListContainer.css'
import GetFetch from '../data/Data'
import { useEffect, useState } from 'react'
import ItemList from '../itemList/ItemList'

const ItemListContainer = () => {
  const[data, setData] = useState([])
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    GetFetch
    .then((resp)=>setData(resp))
    .catch((error=>console.log(error)))
    .finally(()=>setLoading(false))
  },[])



  return (<>
    <div id='ItemList-container' className='row itemContainer gap-3'>
    {
      loading?<span>Cargando...</span>:
      <ItemList products={data}/>
    }
    </div>
    </>
)}

export default ItemListContainer