import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingBtn, setLoadingBtn] = useState(true);
    const [ modalShow, setModalShow ] = useState(false);

    const LoadingBtn = (val)=> {
        return setLoadingBtn(val)
    }

    const Loading = (val)=> {
        return setLoading(val)
    }

    const ModalShow = (val)=> {
        return setModalShow(val)
    }

    const totalCart = () => {
        return cartList.reduce((acum,prod) => acum + (prod.quantity * prod.price),0)
    }

    const totalItemCart = () => {
        return cartList.reduce((acum,prod) => acum + prod.quantity,0)
    }

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
    }

    const showList = () => {
        console.log(cartList)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            modalShow,
            loading,
            loadingBtn,
            showList,
            addToCart,
            removeItem,
            removeAllCart,
            totalCart,
            totalItemCart,
            Loading,
            ModalShow,
            LoadingBtn
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider