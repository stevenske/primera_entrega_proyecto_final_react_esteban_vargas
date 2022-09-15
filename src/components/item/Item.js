import React from 'react'
import './Item.css'

const Item = ({ data }) => {
    return (
        <>
            <div id={`phone${data.id}`} className="card card_size d-flex">
                <img src={`${data.image}`} className="card-img-top zoom " alt={data.category}/>
                    <div className="d-flex justify-content-center card-body">
                        <h5 className="card-title text-center">{data.title}</h5>                        
                        <h6 className="card-title text-center">${data.price}</h6>
                        <button className='btn'>Add to Cart</button>
                    </div>
            </div>
        </>
    )
}

export default Item