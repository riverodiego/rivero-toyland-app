import {createContext, useState,useContext} from  'react'
 const CartContext = createContext ()

 export const useCartContext = () => useContext (CartContext)

 const CartContextProvider = ({children}) => {
    const[ cartList , setCartList] = useState ([])
    
    const addToCart = (prod,cantidad) =>{

        const position = () =>{ cartList.findIndex(element => element.prod.id === prod.id)} //esto devuelve el valor de la posicion del array del producto en caso de encontrarlo

        if (position > -1) { //aca dice que si es de 0 para arriba es porque lo encontro, ya que el array comienza en index 0
                const CantActual = cartList[position].cant

                cartList.splice(position, 1) // este paso borra el objeto encontrado en el cartList, dice ve a la posicion index y borra es posicion
                setCartList([...cartList, {prod, cantidad: cantidad + CantActual}]) //este paso suma la cantidad actual con la cantidad nueva
            }
            else {
                setCartList([...cartList, {prod, cantidad}]) // este caso es cuando es nuevo el producto lo agrega directamente
            }
    }
  
    function addCart (items) {
        setCartList([...cartList,items])
    }
    const showList = () => {
         console.log (cartList)
     }
    return (
        <CartContext.Provider value={{
            cartList, 
            showList,
            addCart,
            addToCart,
           }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider