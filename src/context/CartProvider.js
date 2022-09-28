import { useState } from "react"
import { CartContext } from "./CartContext"

const CartProvider = ({children}) => {
    const[cart,setCart] = useState([])
    const addToCart = (product, quantity) =>{
        let exist = cart.find((x) => x.id === product.id)
        if(!isInCart(product.id)){
        setCart([...cart,{...product, quantity}])
        console.log('cart',([...cart,{...product, quantity}]))
        }else{
            const newCartItems = cart.map((x) => x.id === product.id ? {...exist, quantity: exist.quantity + quantity}: x)
            setCart(newCartItems)
            // return (cart.reduce((acc,prod)=> acc + prod.quantity,0)),
            console.log(newCartItems)
        }

}
const isInCart = (id) =>{
    return cart.some ((product) => product.id === id)
}
const removeProduct = (productId)=> {
    let newArray =[]
    cart.forEach((product)=>{
        if (product.id !== productId){
            console.log(productId);
            newArray.push(product)
        }
    })
    setCart(newArray)
}
const clear = () =>{
    setCart([])
}
    return (
        <CartContext.Provider value={{cart, addToCart, removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider