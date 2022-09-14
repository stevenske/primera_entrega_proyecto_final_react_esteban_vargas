import GetFetch from '../data/Data'
import { useEffect, useState } from 'react'
import ItemListDetail from '../itemListDetail/ItemListDetail'

const ItemDetailContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        GetFetch
            .then((resp) => setData(resp.filter(el => el.id == 1)))
            .catch((error => console.log(error)))
            .finally(() => setLoading(false))
    }, [])

    return (
    <>
        <div id='ItemDetail-container' className='row itemContainer gap-3'>
            {
                loading ? <span>Cargando...</span> :
                    <ItemListDetail products={data} />
            }
        </div>
    </>
    )
}

export default ItemDetailContainer