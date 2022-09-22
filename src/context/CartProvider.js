import { useState } from "react"
import { CartContext } from "./CartContext"

const CartProvider = ({children}) => {
    const[cart,setCart] = useState([])
    const addToCart = (item, quantity) =>{
        if(isInCart(item.id)){
        alert('is in the cart')
        }else{
            setCart([...cart,{...item, quantity}])
        }
        console.log('cart',([...cart,{...item, quantity}]))
}
const isInCart = (id) =>{
    return cart.some ((item) => item.id === id)
}
const clear = () =>{
    setCart([])
}
    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider