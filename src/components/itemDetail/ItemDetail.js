import React from 'react'
import './ItemDetail.css'
const ItemDetail = ({ data }) => {
    return (
        <>
            <div id={`phone${data.id}`} className="col-6 card card_size d-flex">
                <img src={`${data.img}`} className="card-img-top zoom" alt={data.alt}/>
                    <div className="d-flex justify-content-center card-body">
                        <h5 className="card-title text-center">{data.brand} {data.model}</h5>
                        <h5 className="card-title text-center">Stock: {data.stock}</h5>
                        <h6 className="card-title text-center">${data.price}</h6>
                        <button className='btn'>Comprar</button>
                    </div>
            </div>
            <ul className='desc col-6'>
                <h3>Description:</h3>
                <li>{data.desc[1]}</li>
                <li>{data.desc[2]}</li>
                <li>{data.desc[0]}</li>
                <li>{data.desc[4]}</li>
                <li>{data.desc[3]}</li>
            </ul>

        </>
    )
}

export default ItemDetail