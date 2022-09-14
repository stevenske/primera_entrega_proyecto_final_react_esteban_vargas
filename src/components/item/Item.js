import React from 'react'
import './Item.css'

const Item = ({ data }) => {
    return (
        <>
            <div id={`phone${data.id}`} className="col-md-2 card card_size d-flex">
                <img src={`${data.img}`} className="card-img-top zoom" alt={data.alt}/>
                    <div className="d-flex justify-content-center card-body">
                        <h5 className="card-title text-center">{data.brand} {data.model}</h5>
                        <h5 className="card-title text-center">Stock: {data.stock}</h5>
                        <h6 className="card-title text-center">${data.price}</h6>
                        <button className='btn'>Comprar</button>
                    </div>
            </div>

        </>
    )
}

export default Item