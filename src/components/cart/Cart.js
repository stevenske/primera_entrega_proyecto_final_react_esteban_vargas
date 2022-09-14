import './Cart.css'
import NavBar from '../navBar/NavBar'

const Cart = ({ img }) => {
    return (
        <div id="cart-container" className="cart cart-focus">
            <img src={img} alt="shopping cart logo" />
            <div id="cartCounter-container">
                <p id="cartCounter">0</p>
            </div>
        </div>
    )
}

export default Cart