import React from 'react'
import {useCartContext} from '../../context/CartContext'
import { Button, Card, Alert } from 'react-bootstrap';

export default function Cart() {
    
    const { cartList, totalCart, removeItem, removeAllCart } = useCartContext();

    return (
        <>
            <h1>Seccion Carrito</h1>
            {totalCart()}
            {cartList.map(prod => <li key={prod.id} className="p-3 m-2 text-center shadow"> <Card.Img variant="top" style={{ maxWidth: '4rem', maxHeight: '4rem' }} src={prod.foto} /> {prod.name} ······ Precio Un: $ {prod.price} ······ Cant: {prod.quantity}
            ······ Subtotal: {prod.quantity*prod.price}······<Button variant="primary" size="sm" onClick={() => removeItem(prod.id)} >Eliminar</Button>
            </li> )}
            <div className="m-5 text-center" >
                <Button variant="success"  size="sm" onClick={() => removeAllCart()} hidden={(cartList.length > 0 ? false : true)}> Borrar todo el carrito</Button>
            </div>
            <Alert variant={"light"} className="p-5 m-5 text-center" hidden={(cartList.length > 0 ? true : false)}> No hay productos seleccionados...</Alert>
        </>
    )
}
