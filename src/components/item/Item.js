import React from 'react'
import './Item.css'

const Item = ({ data }) => {
    return (
        <>
            <div id={`phone${data.id}`} className="card card_size d-flex">
                <img src={`${data.image}`} className="card-img-top zoom " alt={data.category}/>
                    <div className="d-flex justify-content-center card-body">
                        <h5 className="card-title text-center">{data.title}</h5>                        
                    <h5 className="rate card-title text-center" style={{color: data.rating.rate < 3? 'red':'green'}}><span style={{color:'black'}}>Ranting:</span> {data.rating.rate}</h5>
                    <h5 className="rate card-title text-center">STOCK: {data.rating.count}</h5>
                        <h6 className="card-title text-center">${data.price}</h6>
                    </div>
            </div>
        </>
    )
}


export default Item