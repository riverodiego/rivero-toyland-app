import React from 'react'
import {useCartContext} from '../../context/CartContext'
import { Button, Card } from 'react-bootstrap';

export default function Cart() {
    
    const { cartList, removeItem, removeAllCart } = useCartContext();

    return (
        <>
            <h1>Seccion Carrito</h1>
            {cartList.map(prod => <li key={prod.id} className="p-3 m-2 text-center shadow"> <Card.Img variant="top" style={{ maxWidth: '4rem', maxHeight: '4rem' }} src={prod.foto} /> {prod.name} ······ Precio Un: $ {prod.price} ······ Cant: {prod.quantity}
            ······ Subtotal: {prod.quantity*prod.price}······<Button variant="primary" size="sm" onClick={() => removeItem(prod.id)} >Eliminar</Button>
            </li> )}
            <div className="m-5 text-center" >
                <Button variant="success"  size="sm" onClick={() => removeAllCart()} disabled={cartList.length === 0}> Borrar todo el carrito</Button>
            </div>
        </>
    )
}
