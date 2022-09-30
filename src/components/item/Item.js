import React from 'react'
import './Item.css'
const Item = ({ data }) => {
    return (
        <>
            <div id={`phone${data.id}`} className="card card_size d-flex">
                <img src={`${data.image}`} className="card-img-top zoom " alt={data.category}/>
                    <div className="d-flex justify-content-center card-body">
                        <h5 className="card-title text-center">{data.brand}</h5>                        
                    <h5 className="rate card-title border border-dark rounded-3 text-center">STOCK: {data.stock}</h5>
                        <h4 className="card-title text-center pt-2">${data.price}</h4>
                    </div>
            </div>
        </>
    )
}

export default Item