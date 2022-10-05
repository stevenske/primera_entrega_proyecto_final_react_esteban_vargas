import { useState } from "react"
import { CartContext } from "./CartContext"

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (product, quantity) => {
        console.log(product);

        if (isInCart(product.id)) {
            const elementoDuplicado = cart.find(
                (elemento) => elemento.id === product.id
            );
            elementoDuplicado.quantity = elementoDuplicado.quantity + quantity;
            console.log(elementoDuplicado);

            alert("Ya esta en el carrito");
            console.log(cart);
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };
    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const removeProduct = (productId) => {
        let newArray = []
        cart.forEach((product) => {
            if (product.id !== productId) {
                console.log(productId);
                newArray.push(product)
            }
        })
        setCart(newArray)
    }
    const clear = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeProduct }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider