import React, { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [totalCartPay, setTotalCartPay] = useState(0);

    useEffect(() => {
            setTimeout(()=>{setTotalCartPay(cartList.reduce((acum,prod) => acum + (prod.quantity * prod.price),0))},1000)
        }, [cartList])

    function addToCart(item){

        const index = cartList.findIndex(elem => elem.id === item.id)

        if (index > -1) {
            const oldQuantity = cartList[index].quantity

            cartList.splice(index, 1)
            setCartList([...cartList, {...item, quantity: item.quantity + oldQuantity }])
        }
        else {
            setCartList([...cartList, item])
        }

    }

    const removeItem = (id) => {
        return setCartList (cartList.filter(elem => elem.id !== id))
    }

    const removeAllCart = () => {
        setCartList([])
        setTotalCartPay(0);
    }

    const showList = () => {
        console.log(cartList)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            totalCartPay,
            showList,
            addToCart,
            removeItem,
            removeAllCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider