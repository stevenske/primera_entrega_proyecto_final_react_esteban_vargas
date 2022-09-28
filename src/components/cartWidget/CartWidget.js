import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartWidget.css'
const Cart = ({ img }) => {
    const {cart} = useContext(CartContext)
    const totalCart = (cart.reduce((acc,prod)=> acc + prod.quantity,0))
    return (
        <div id="cart-container" className="cart">
            <img src={img} alt="shopping cart logo" />
            <div id="cartCounter-container">
                <p id="cartCounter">{totalCart}</p>
            </div>
        </div>
    )
}

export default Cart