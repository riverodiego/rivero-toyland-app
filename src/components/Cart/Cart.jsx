import React from 'react'
import {useCartContext} from '../../context/CartContext'
import { Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Cart() {
    
    const { cartList, removeItem, removeAllCart, totalCartPay } = useCartContext();

    return (
        <>
            <h1>Seccion Carrito</h1>
            {cartList.map(prod => <li key={prod.id} className="p-3 m-2 text-center shadow"> <Card.Img variant="top" style={{ maxWidth: '4rem', maxHeight: '4rem' }} src={prod.foto} /> {prod.name} ······ Precio Un: $ {prod.price} ······ Cant: {prod.quantity}
            ······ Subtotal: {prod.quantity*prod.price}······<Button variant="primary" size="sm" onClick={() => removeItem(prod.id)} >Eliminar</Button>
            </li> )}
            <Alert variant="primary" className="p-3 m-2 text-center shadow" hidden={cartList.length > 0 ? false : true} >
                <h5> Total de la Compra: $ {totalCartPay} </h5>
            </Alert>
            <div className="m-5 text-center" >
                    <Button variant="success"  size="sm" onClick={() => removeAllCart()} hidden={cartList.length > 0 ? false : true}> Borrar todo el carrito</Button>
                <Alert variant={"light"} className="p-3 m-3 text-center" hidden={cartList.length > 0 ? true : false}> 
                    <h3>Carrito Vacio</h3>
                    No hay productos seleccionados...
                </Alert>
                <Link to='/'>
                        <Button variant="secondary" className="mx-2" size="sm">Ir al Inicio</Button>
                </Link>
            </div>
        </>
    )
}
