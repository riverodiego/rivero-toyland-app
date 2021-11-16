import React from 'react'
import {useCartContext} from '../../context/CartContext'
import { Button, Card, Alert, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Cart() {
    
    const { cartList, removeItem, removeAllCart, totalCart } = useCartContext();

    console.log("cartList de carrito",cartList);
    console.log("fn totalCart de carrito",totalCart);

    return (
        <>
            <h1>Seccion Carrito</h1>
            <h3 className="m-5" hidden={cartList.length > 0 ? false : true}>Listado de productos agregados</h3>
            <Table striped bordered hover  hidden={cartList.length > 0 ? false : true}>
                <thead>
                    <tr className="text-center">
                        <th>Id</th>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Precio Un</th>
                        <th>Cant</th>
                        <th>Subtotal</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
            {cartList.map(prod => <tr key={prod.id} className="p-3 m-2 text-center shadow"> 
                                    <td> {prod.id} </td>
                                    <td> <Card.Img variant="top" style={{ maxWidth: '4rem', maxHeight: '4rem' }} src={prod.foto} /> </td>
                                    <td className="w-25"> {prod.name} </td>
                                    <td> $ {prod.price} </td>
                                    <td> {prod.quantity} </td>
                                    <td className="text-end"> $ {prod.quantity*prod.price} </td>
                                    <td> <Button variant="primary" size="sm" onClick={() => removeItem(prod.id)} >Eliminar</Button> </td>
                                </tr> )}
                                <tr>
                                    <th colSpan="5"className="fs-5 text-end">
                                            Total de la Compra:
                                    </th>
                                    <th colSpan="1" className="fs-5 text-end">
                                            $ {totalCart()}
                                    </th>
                                </tr>
                </tbody>
            </Table>
            <div className="m-5 text-center" >
                    <Button variant="danger"  size="sm" onClick={() => removeAllCart()} hidden={cartList.length > 0 ? false : true}> Borrar todo el carrito</Button>
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
