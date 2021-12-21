import React from 'react'
import { Table, Card,Button } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext';
import Fade from 'react-reveal/Fade';
import { useState } from 'react';

function CartList() {

    const { cartList, removeItem, removeAllCart, totalCart, IsCartEmpty } = useCartContext();
    const [show, setShow] = useState(true)

    return (
        <Fade left>
            <h3 className="m-3" hidden={IsCartEmpty()}>Lista de productos agregados</h3>
            <Table responsive striped bordered hover  hidden={IsCartEmpty()}>
                <thead>
                    <tr className="text-center">
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Precio Un</th>
                        <th>Cant</th>
                        <th>Subtotal</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map(prod => 
                                        <tr key={prod.id} className="p-3 m-2 text-center shadow"> 
                                            <td> <Fade left collapse when={show}> <Card.Img variant="top" style={{ maxWidth: '4rem', maxHeight: '4rem' }} src={prod.foto} /> </Fade> </td>
                                            <td className="w-25"> {prod.name} </td>
                                            <td> $ {prod.price} </td>
                                            <td> {prod.quantity} </td>
                                            <td className="text-end"> $ {prod.quantity*prod.price} </td>
                                            <td> <Button variant="primary" size="sm" onClick={() => {setTimeout(removeItem(prod.id),14000); setShow(false)}} >Eliminar</Button> </td>
                                        </tr> )}
                                        <tr>
                                            <th colSpan="4"className="fs-5 text-end">
                                                    Total de la Compra:
                                            </th>
                                            <th colSpan="1" className="fs-5 text-end">
                                                    $ {totalCart()}
                                            </th>
                                            <th>
                                                <Button variant="danger"  size="sm" onClick={() => removeAllCart()} 
                                                hidden={IsCartEmpty()}> Eliminar Todo</Button>
                                            </th>
                                        </tr>
                </tbody>
            </Table>
        </Fade>
    )
}

export default CartList
