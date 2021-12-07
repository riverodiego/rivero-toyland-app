import React from 'react'
import { Table,Card,Button } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext';

function CartList() {

    const { cartList, removeItem, removeAllCart, totalCart, IsCartEmpty } = useCartContext();

    return (
        <>
        <h3 className="m-3" hidden={IsCartEmpty()}>Lista de productos agregados</h3>
        <Table striped bordered hover  hidden={IsCartEmpty()}>
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
                {cartList.map(prod => <tr key={prod.id} className="p-3 m-2 text-center shadow"> 
                                        <td> <Card.Img variant="top" style={{ maxWidth: '4rem', maxHeight: '4rem' }} src={prod.foto} /> </td>
                                        <td className="w-25"> {prod.name} </td>
                                        <td> $ {prod.price} </td>
                                        <td> {prod.quantity} </td>
                                        <td className="text-end"> $ {prod.quantity*prod.price} </td>
                                        <td> <Button variant="primary" size="sm" onClick={() => removeItem(prod.id)} >Eliminar</Button> </td>
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
        </>
    )
}

export default CartList
