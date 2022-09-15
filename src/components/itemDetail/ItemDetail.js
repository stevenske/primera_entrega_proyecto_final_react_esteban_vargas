import ItemCount from '../itemCount/ItemCount'
import './ItemDetail.css'
const ItemDetail = ({ product }) => {
    return (
        <>
            <div id={`phone${product.id}`} className="col-6 card card_size d-flex">
                <img src={`${product.image}`} className="card-img-top zoom" alt={product.title}/>
                    <div className="d-flex justify-content-center card-body">
                        <h5 className="card-title text-center">{product.title}</h5>
                        <h5 className="card-title text-center">Stock: {product.rating.count}</h5>
                        <ItemCount product={product}/>
                        <h6 className="card-title text-center">${product.price}</h6>
                        <button className='btn'>Add to Cart</button>
                    </div>
            </div>
            <ul className='desc col-6'>
                <h3>Description:</h3>
                <li>{product.description}</li>
            </ul>

        </>
    )
}

export default ItemDetail