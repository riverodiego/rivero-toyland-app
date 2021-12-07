import React, { useState } from 'react'
import {useCartContext} from '../../context/CartContext'
import { Button, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlertMessage from '../AlertMessage/AlertMessage';
import OrderBuy from '../OrderBuy/OrderBuy';
import CartList from '../CartList/CartList';

export default function Cart() {

    const [idOrder, setIdOrder] = useState('')

    const { modalShow, ModalShow, IsCartEmpty } = useCartContext();

    return (
        <>
        <h1>Seccion Carrito</h1>
        <section className="m-5 text-center" >
            <section hidden={IsCartEmpty()}>
                <CartList/>
                <AlertMessage show={modalShow} onHide={() => ModalShow(false)}
                    titleMsg="Orden de Compra" bodyMsg={<OrderBuy idOrder={idOrder} setIdOrder={setIdOrder}/>}
                />
                <Button variant="success" className="m-3" size="sm" onClick={() => ModalShow(true)} > Generar Pedido</Button>
            </section>
            <Alert variant={"light"} className="p-3 m-3 text-center" hidden={!IsCartEmpty()}> 
                {idOrder!=='' ? <h4>El id de su orden es : {idOrder} </h4> 
                                : 
                                <>
                                    <h3><strong>Carrito Vacio </strong></h3>
                                    <h5>No hay productos seleccionados...</h5>
                                </>
                    }
            </Alert>
            <Link to='/'>
                    <Button variant="secondary" className="mx-2" size="sm">Ir a los Productos</Button>
            </Link>
        </section>
        </>
    )
}
